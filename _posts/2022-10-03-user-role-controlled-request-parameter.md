---
layout: single
title: User role controlled by request parameter – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “User role controlled by request parameter."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "User role controlled by request parameter."

<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/1.png" width="1000">
</p><br>

Según entramos al laboratorio vemos una tienda con un enlace para poder loguearnos, pero nosotros queremos saber si hay algún panel de administración donde poder loguearnos

<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/2.png" width="1000">
</p><br>

Como vemos en la siguiente imagen no tenemos aceeso si ponemos en la url `/admin`, solo tienen permiso de acceso los admin

<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/3.png" width="1000">
</p><br>

Viendo esto vamos al panel de login de un usuario normal y loguearnos con el `usuario wiener`.
<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/4.png" width="1000">
</p><br>

Con el burpsuite activo, vamos a hacer submit al formulario de login para ver que respuesta nos da el servidor. Como podemos ver que nos da una respuesta con un `atributo de admin` que esta denegado igualado a `false`, vamos a ver si
cambiando el `atributo a true` podemos loguearnos como admin.
<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/5.png" width="1000">
</p><br>

Le damos a enviar y le cambiamos también el parámetro como hemos hecho anteriormente.
<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/6.png" width="1000">
</p><br>

Como vemos ya nos ha salido un enlace que nos dirige a un panel de administración, todavía con el burpsuite activo. Pulsamos y cambiamos el atributo de admin a true para poder acceder.
<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/7.png" width="1000">
</p><br>

Volvemos a cambiar el parametro admin de false a true como podemos ver en las siguientes imágenes:

<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/8.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/9.png" width="1000">
</p><br>

Y como podemos ver ya hemos podido acceder al panel de administración, dónde resolveremos el lab eliminando el `user Carlos`.
<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/10.png" width="1000">
</p><br>

Laboratorio resuelto.

<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/11.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_role_controlled_by_request_parameter/12.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
