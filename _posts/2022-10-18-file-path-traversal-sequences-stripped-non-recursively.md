---
layout: single
title: File path traversal, traversal sequences stripped non-recursively – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “File path traversal, traversal sequences stripped non-recursively."
date: 2022-10-18
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - Directory traversal
  - Practitioner
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "File path traversal, traversal sequences stripped non-recursively."

## Pasos

Cómo nos dice en la descripción del producto tenemos que acceder al directorio /etc/passwd mediante la ruta de las imágenes

Otro consejo que nos da es que en este caso la aplicaciñon sanea por parte del servidor todo contenido que tenga que ver con directorios.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_non_recuersively/1.png" width="1000">
</p><br>

En la web que nos aparece es una tienda donde podemos ver los productos, así que vamos a ver un producto. 

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_non_recuersively/2.png" width="1000">
</p><br>

Vamos a darle a abrir `imagen en una pestaña nueva` para poder ver la ruta de la imagen y a partir de dicha ruta poder acceder a la ruta vulnerable.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_non_recuersively/3.png" width="1000">
</p><br>

Vamos a interceptar la petición con el burpsuite y la vamos a llevar al Repeater con `Ctrl+R`, vamos a ver si retrocediendo los directorios con `....//` múltiples veces llegamos a ver el directorio. Y en la respuesta nos da la solución hemos podido acceder
a dicha ruta.
* En este caso como por parte del servidor sanea los datos introducidos si sanea ../, si ponemos el doble realmente sanea los datos de entrada 1 vez, así que de esa forma `no es recursivo` el saneamiento que aplica y conseguimos acceder al directorio.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_non_recuersively/4.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_non_recuersively/5.png" width="1000">
</p><br>

Con esto concluimos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_non_recuersively/6.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
