---
layout: single
title: File path traversal, traversal sequences stripped with superfluous URL-decode – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “File path traversal, traversal sequences stripped with superfluous URL-decode."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "File path traversal, traversal sequences stripped with superfluous URL-decode."

## Pasos

Cómo nos dice en la descripción del producto tenemos que acceder al directorio /etc/passwd mediante la ruta de las imágenes

Otro consejo que nos da es que en este caso la aplicaciñon sanea por parte del servidor todo contenido que tenga que ver con directorios.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/1.png" width="1000">
</p><br>

En la web que nos aparece es una tienda donde podemos ver los productos, así que vamos a ver un producto. 

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/2.png" width="1000">
</p><br>

Vamos a darle a abrir `imagen en una pestaña nueva` para poder ver la ruta de la imagen y a partir de dicha ruta poder acceder a la ruta vulnerable.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/3.png" width="1000">
</p><br>

Vamos a interceptar la petición con el burpsuite y la vamos a llevar al Repeater con `Ctrl+R`.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/4.png" width="1000">
</p><br>

En este caso como intentando los métodos anteriores vamos a codear la barra `/` para ver si así no lo sanea por parte del servidor. 

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/5.png" width="1000">
</p><br>

Ahora la `/` codeada es `%2f` y si le enviamos la respuesta nos dice que no existe el fichero. 


<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/6.png" width="1000">
</p><br>

En este caso vamos a volver a codear la `/` que nos devuelve codeado `%25`.


<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/7.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/8.png" width="1000">
</p><br>

Vamos a copiar y pegar ese mismo directorio para ir hacia atrás hasta el `etc/passwd`.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/9.png" width="1000">
</p><br>

Con esto concluimos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/file_path_traversal_sequences_stripped_with_superflous_url_decode/10.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
