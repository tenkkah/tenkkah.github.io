---
layout: single
title: File path traversal, validation of start of path – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “File path traversal, validation of start of path."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "File path traversal, validation of start of path."

## Pasos

Cómo nos dice en la descripción del producto tenemos que acceder al directorio /etc/passwd mediante la ruta de las imágenes

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_start_path/1.png" width="1000">
</p><br>

En la web que nos aparece es una tienda donde podemos ver los productos, así que vamos a ver un producto. Vamos a darle a abrir `imagen en una pestaña nueva` para poder ver la ruta de la imagen y a partir de dicha ruta poder acceder a la ruta vulnerable.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_start_path/2.png" width="1000">
</p><br>

Vamos a interceptar la petición con el burpsuite y la vamos a llevar al Repeater con `Ctrl+R`.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_start_path/3.png" width="1000">
</p><br>

En este caso si intentamos acceder directamente al directorio `/etc/passwd` nos dice que nos falta el `parámetro filename`.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_start_path/4.png" width="1000">
</p><br>

Cómo hemos visto en la petición la ruta de la imagen es diferente, es `var/www/images` y desde ese directorio como podemos ver en la respuesta nos deja acceder al directorio `/etc/passwd`.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_start_path/5.png" width="1000">
</p><br>

Con esto concluimos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_validation_start_path/6.png" width="1000">
</p><br>



¡Un saludo y espero que os sirva de apoyo!
