---
layout: single
title: SQL injection UNION attack, determining the number of columns returned by the query – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “SQL injection UNION attack, determining the number of columns returned by the query."
date: 2022-10-13
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - SQL Injection
  - Practitioner
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "SQL injection UNION attack, determining the number of columns returned by the query."

## Pasos

Dirígete a la página de inicio de sesión.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/1.png" width="1000">
</p><br>

## Operador UNION

Operador UNION utilizado en SQL para combinar los resultados de dos o más instrucciones SELECT en un único conjunto de resultados. Cuando una aplicación contiene una vulnerabilidad de inyección SQL
 que ocurre en una declaración SELECT y los resultados de la consulta se devuelven dentro de la respuesta de la aplicación, puede usar el operador UNION para realizar otra segunda consulta 
y combinar su resultado con la primera consulta. De esa manera, puede recuperar datos de otras tablas dentro de la base de datos. Es la forma más rápida de recuperar información arbitraria de 
la base de datos en situaciones en las que los resultados de la consulta se devuelven directamente.

Consideremos una aplicación web que permite a los usuarios buscar diferentes categorías de productos. La búsqueda de productos en una categoría particular ("Gifts") hace que la aplicación ejecute la siguiente consulta sql.

```plaintext
SELECT product_name,details FROM products WHERE category = 'Gifts'
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/2.png" width="1000">
</p><br>

La consulta SQL anterior devuelve el siguiente resultado:

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/3.png" width="1000">
</p><br>

Un atacante puede proporcionar una entrada manipulada utilizando el operador UNION para inyectar una segunda consulta SELECT y agregar su resultado a la consulta original. 
Esta segunda consulta se puede utilizar para recuperar datos de usuarios de la tabla de usuarios de la siguiente manera:

```plaintext
' UNION SELECT username,password FROM users--
```

Hace que la aplicación ejecute la siguiente consulta.

```plaintext
SELECT product_name,details FROM products WHERE category = 'Gifts' UNION SELECT username,password FROM users--
```
Esto devuelve el resultado de la consulta original seguido del contenido de la tabla de usuarios.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/4.png" width="1000">
</p><br>


Cuando los resultados de dos o más consultas SELECT se combinan con el operador UNION, los nombres de columna del conjunto de resultados son los mismos que los devueltos por la primera 
consulta SELECT (original). Como se muestra en la tabla anterior, el nombre de usuario aparece en la columna product_name y la contraseña aparece en la columna de detalles.

Esto implica que cuando la aplicación procesa los resultados de la consulta modificada, no tiene forma de encontrar que los datos devueltos se originaron en la misma tabla o en una tabla diferente en la base de datos.

Para que una consulta UNION funcione, se deben cumplir dos requisitos clave:

1. Cuando los resultados de dos consultas se combinan mediante el operador UNION, los dos conjuntos de resultados deben tener la misma estructura. 
Eso significa que deben contener la misma cantidad de columnas, que tienen tipos de datos iguales o compatibles, que aparecen en el mismo orden.

2. Para inyectar una segunda consulta, el atacante debe tener una idea clara sobre la tabla de la base de datos a la que quiere apuntar y los nombres de las columnas relevantes.

## NOTAS

* Para que la consulta inyectada pueda combinarse con la primera, no es estrictamente necesario que contenga los mismos tipos de datos. Más bien, deben ser compatibles. 
En otras palabras, cada tipo de datos en la segunda consulta debe ser idéntico al tipo correspondiente en la primera o implícitamente convertible a él. De hecho, el valor NULL se puede convertir a cualquier tipo de datos. 
Por lo tanto, si no conoce el tipo de datos de un campo en particular, simplemente puede SELECCIONAR NULL para ese campo.

* En la mayoría de los casos, puede lograr sus objetivos simplemente identificando un solo campo dentro de la consulta original que tiene un tipo de datos de cadena. 
Esto es suficiente para inyectar consultas arbitrarias que devuelven datos basados ​​en cadenas y recuperar los resultados, lo que le permite extraer los datos deseados de la base de datos.


## PASO 1

Su primera tarea es determinar el número de columnas devueltas por la consulta original que ejecuta la aplicación. Puede hacer esto de dos maneras:

1. El primer método consiste en inyectar una serie de cláusulas ORDER BY e incrementar el índice de columna especificado hasta que se produzca un error. 
Por ejemplo, suponiendo que el punto de inyección es una cadena entrecomillada dentro de la cláusula WHERE de la consulta original, enviaría:

```plaintext
' ORDER BY 1--
' ORDER BY 2--
' ORDER BY 3--
```

Esta serie de cargas útiles modifica la consulta original para ordenar los resultados por diferentes columnas en el conjunto de resultados.
 Dado que la columna en la cláusula "ordenar por" se puede especificar por su índice, no necesita conocer los nombres de las columnas. 
Si el índice de la columna especificada excede el número de columnas en la consulta original, la base de datos arroja un error.

En muchos casos del mundo real, la aplicación detecta los mensajes de error de la base de datos que se muestran y no se devuelven en la respuesta HTTP. 
Sin embargo, si puede detectar algún tipo de diferencia en la respuesta de la aplicación, puede inferir cuántas columnas devuelve la consulta original.

2. El segundo método consiste en enviar una serie de cargas útiles de UNION SELECT que especifican un número diferente de valores nulos:

```plaintext
' UNION SELECT NULL --
' UNIÓN SELECT NULL,NULL --
' UNIÓN SELECT NULL,NULL,NULL --
```

Si el número de nulos no coincide con el número de columnas, la base de datos devuelve un error.

Cuando se ejecuta su consulta, la aplicación puede devolver un mensaje de error, o simplemente puede devolver un error genérico o ningún resultado.
 Si la aplicación no devuelve un mensaje de error de la base de datos como esperaba, aún puede saber cuándo su consulta inyectada fue exitosa. 
Cuando el número de nulos coincide con el número de columnas, se devolverá una fila adicional de datos en el conjunto de resultados, 
que contiene la palabra NULL o una cadena vacía. Tenga en cuenta que la fila inyectada puede contener solo celdas vacías y, por lo tanto, puede ser difícil 
de ver cuando se representa como HTML. Por esta razón, es preferible observar la respuesta en bruto al realizar este ataque.

En las bases de datos de Oracle, cada declaración SELECT debe incluir un atributo FROM, por lo que inyectar UNION SELECT NULL produce un error independientemente del número de columnas. 
Puede satisfacer este requisito seleccionando DUAL de la tabla accesible globalmente. Por ejemplo:

```plaintext
' UNION SELECT NULL FROM DUAL--
```

## OPCIÓN 1
Intercepte la solicitud GET utilizando Burp Suite e inyecte una serie de cláusulas ORDER BY que incrementen el índice de columna especificado hasta que la aplicación muestre un mensaje de error.

```plaintext
' ORDER BY 1 --
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/5.png" width="1000">
</p><br>

```plaintext
' ORDER BY 2 --
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/6.png" width="1000">
</p><br>

```plaintext
' ORDER BY 3 --
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/7.png" width="1000">
</p><br>

```plaintext
' ORDER BY 4 --
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/8.png" width="1000">
</p><br>

```plaintext
' ORDER BY 4 ----> Returns an error message.
```

Por lo tanto, el número de columnas devueltas por la consulta original es 3

## OPCIÓN 2

Enviando una serie de cargas útiles de UNION SELECT especificando un número diferente de valores nulos hasta que la aplicación proporcione un código de respuesta HTTP 200.

```plaintext
' UNION SELECT NULL --
```
<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/9.png" width="1000">
</p><br>

```plaintext
' UNION SELECT NULL, NULL, NULL --
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/10.png" width="1000">
</p><br>

En este ejercicio de laboratorio, podemos ver claramente la fila adicional de datos que contiene valores nulos cuando se representa como HTML.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/11.png" width="1000">
</p><br>

Así que de esta forma concluimos el laboratorio y lo resolvemos.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/12.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_determining_the_number_of_columns_returned_by_the_query/13.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
