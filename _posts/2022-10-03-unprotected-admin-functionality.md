---
layout: single
title: Unprotected admin functionality – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Unprotected admin functionality."
date: 2022-10-03
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - Burpsuite
  - JavaScript
  - Access control vulnerabilities
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Unprotected admin functionality."

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality/1.png" width="1000">
</p><br>

Según entramos al laboratorio vemos una tienda con un enlace para poder loguearnos, pero nosotros queremos saber si hay algún panel de administración donde poder loguearnos

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality/2.png" width="1000">
</p><br>

Como vemos en la siguiente imagen en la url cambia cuando entramos al panel de login del usuario asique habrá un redirect a algún panel de administración
<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality/3.png" width="1000">
</p><br>

Vamos a ver si el `robots.txt` está visible para los usuarios donde básicamente en este archivo se acogen los rastreadores de las url donde se pueden acceder a tu sitio web. 

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality/4.png" width="1000">
</p><br>

Listo! Aparece una ruta y efectivamente parece ser una ruta de un panel de admin. Vamos a ponerla en la cabecera, como podemos ver podemos borrar los usuarios que hay registrados en la web. Borramos el `user Carlos` como 
nos pedía en el enunciado y ya habríamos resuelto el lab.
<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality/5.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality/6.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality/7.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
