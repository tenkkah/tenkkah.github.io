---
layout: single
title: Unprotected admin functionality with unpredictable URL – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Unprotected admin functionality with unpredictable URL."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Unprotected admin functionality with unpredictable URL."

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality_with_unpredicatable_url/1.png" width="1000">
</p><br>

Según entramos al laboratorio vemos una tienda con un enlace para poder loguearnos, pero nosotros queremos saber si hay algún panel de administración donde poder loguearnos

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality_with_unpredicatable_url/2.png" width="1000">
</p><br>

Como en este caso probando no funciona poniendo `robots.txt` en la url a ver si nos arroja algún directorio, en este caso vamos a probar visualizando el contenido `javascript` donde pueda hacer referencias a una función
de login de admin. En la siguiente imagen se muestra que hay una función donde se ve claramente una url de admin.
<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality_with_unpredicatable_url/3.png" width="1000">
</p><br>

Una vez copiado el directorio, vamos a la url la copiamos y listo. Accedemos al panel de admin donde tenemos la gestión de usuarios donde en este caso tenemos que eliminar el usuario de carlos para completar el lab.

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality_with_unpredicatable_url/4.png" width="1000">
</p><br>

Laboratorio completado

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality_with_unpredicatable_url/5.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/unprotected_admin_functionality_with_unpredicatable_url/6.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
