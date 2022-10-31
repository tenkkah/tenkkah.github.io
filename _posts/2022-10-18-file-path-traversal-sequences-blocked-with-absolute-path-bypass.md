---
layout: single
title: File path traversal, sequences blocked with absolute path bypass – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “File path traversal, sequences blocked with absolute path bypass."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "File path traversal, sequences blocked with absolute path bypass."

## Pasos

Cómo nos dice en la descripción del producto tenemos que acceder al directorio /etc/passwd mediante la ruta de las imágenes

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_blocked_with_absolute_path_bypass/1.png" width="1000">
</p><br>

En la web que nos aparece es una tienda donde podemos ver los productos, así que vamos a ver un producto. 

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_blocked_with_absolute_path_bypass/2.png" width="1000">
</p><br>

Vamos a darle a abrir `imagen en una pestaña nueva` para poder ver la ruta de la imagen y a partir de dicha ruta poder acceder a la ruta vulnerable.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_blocked_with_absolute_path_bypass/3.png" width="1000">
</p><br>

Vamos a interceptar la petición con el burpsuite y la vamos a llevar al Repeater con `Ctrl+R`, vamos a ver si retrocediendo los directorios con `../` múltiples veces llegamos a ver el directorio. Y en la respuesta nos da la solución hemos podido acceder
a dicha ruta.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_blocked_with_absolute_path_bypass/4.png" width="1000">
</p><br>

En este caso si tiramos de una ruta absoluta nos coge el fichero sin tener que retroceder con `../`.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_blocked_with_absolute_path_bypass/5.png" width="1000">
</p><br>

Con esto concluimos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_blocked_with_absolute_path_bypass/6.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
