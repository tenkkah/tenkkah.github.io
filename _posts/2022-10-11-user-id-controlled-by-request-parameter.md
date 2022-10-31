---
layout: single
title: User ID controlled by request parameter – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “User ID controlled by request parameter."
date: 2022-10-11
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "User ID controlled by request parameter."

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/1.png" width="1000">
</p><br>

Según entramos al laboratorio vemos una tienda con un enlace para poder loguearnos, pero nosotros queremos saber si hay algún panel de administración donde poder loguearnos

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/2.png" width="1000">
</p><br>

Vamos a darle a `my-account` y a loguearnos con el usuario que nos dan en la descripción del laboratorio, con `wiener` como usuario y `peter` como passoword.

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/3.png" width="1000">
</p><br>

Al entrar a nuestro perfil nos aparece la api key de nuestro usuario que es única e irremplazable. 
* Con una apikey podemos loguearnos y suplantar a un usuario sin saber su password

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/4.png" width="1000">
</p><br>

Volvemos al panel principal donde aparece que estamos logueados y podemos irnos a nuestra cuenta y con el burpsuite activo vamos a ver que respuesta nos da.

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/5.png" width="1000">
</p><br>

Como vemos en la petición el usuario se identifica mediante un id único. 

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/6.png" width="1000">
</p><br>

Con lo cual vamos a ver si cambiando el nombre de usuario en la petición podemos loguearnos con ese usuario, en este caso con el usuario carlos como pone en la descripción del laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/7.png" width="1000">
</p><br>

Ahora enviamos la petición dándole a `send` y apagamos el burpsuite y finalmente vamos al panel de login de usuario y como vemos en la siguiente imagen nos ha cambiado el login y ahora estamos logueados como Carlos y con la `apikey`
 única la cuál le daremos a `submit answer` y pegaremos la apikey esa es la respuesta. Con esto finalmente completamos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/8.png" width="1000">
</p><br>

Laboratorio resuelto.

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/9.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_by_request_parameter/10.png" width="1000">
</p><br>



¡Un saludo y espero que os sirva de apoyo!
