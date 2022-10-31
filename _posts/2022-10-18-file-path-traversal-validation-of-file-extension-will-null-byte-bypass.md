---
layout: single
title: File path traversal, validation of file extension with null byte bypass – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “File path traversal, validation of file extension with null byte bypass."
date: 2022-10-18
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - Directory traversal
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "File path traversal, validation of file extension with null byte bypass."

## Pasos

Cómo nos dice en la descripción del producto tenemos que acceder al directorio /etc/passwd mediante la ruta de las imágenes

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/1.png" width="1000">
</p><br>

En la web que nos aparece es una tienda donde podemos ver los productos, así que vamos a ver un producto. Vamos a darle a abrir `imagen en una pestaña nueva` para poder ver la ruta de la imagen y a partir de dicha ruta poder acceder a la ruta vulnerable.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/2.png" width="1000">
</p><br>

Vamos a interceptar la petición con el burpsuite y la vamos a llevar al Repeater con `Ctrl+R`, vamos a ver si retrocediendo los directorios con `../` múltiples veces llegamos a ver el directorio. Y en la respuesta nos da la solución hemos podido acceder
a dicha ruta.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/3.png" width="1000">
</p><br>

Vamos a probar los métodos anteriores.
1. Utilizaremos una ruta absoluta con `/etc/passwd` pero no encuentra el directorio

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/4.png" width="1000">
</p><br>

2. En este caso vamos a ver si retrocediendo con `../` llegamos a ver el directorio, pero tampoco es el caso. 

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/5.png" width="1000">
</p><br>

3. Vamos a ver ahora si por casualidad por parte del servidor está saneando los datos de entrada y con `....//` nos deja acceder y tampoco es el caso.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/6.png" width="1000">
</p><br>

4. Vamos a probar el último método de hacer un doble coder, primero vamos a codear la `/` para que nos la represente como `%2f` y esta codificación la vamos a volver a codear y nos sale `%252f`, así que vamos a probar con `..%252f..%252f..%252f..%252fetc/passwd`
y tampoco podemos llegar a ver el directorio.


<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/7.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/8.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/9.png" width="1000">
</p><br>

En este caso vamos a ver si con la extensión `.jpg` nos reconoce la ruta ya que en la descripción del laboratorio nos dice que tiene que tener una extensión, pero tampoco nos arroja el fichero `/etc/paswd`.


<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/10.png" width="1000">
</p><br>

Por último vamos a usar un `null byte como %00` de esa forma nos quitaría la parte de la extensión `%00.jpg` y se quedaría con `/etc/passwd`. 

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/11.png" width="1000">
</p><br>

Con esto concluimos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_of_file_extension_will_null_byte_bypass/12.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
