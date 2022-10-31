---
layout: single
title: User role can be modified in user profile – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “User role can be modified in user profile."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "User role can be modified in user profile."

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/1.png" width="1000">
</p><br>

Según entramos al laboratorio vemos una tienda con un enlace para poder loguearnos, pero nosotros queremos saber si hay algún panel de administración donde poder loguearnos

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/2.png" width="1000">
</p><br>

Vamos a loguearnos con el user `wiener` y las password `peter`, seguidamente vamos a cambiar el correo de la cuenta a uno que nosotros queramos

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/3.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/4.png" width="1000">
</p><br>

Seguidamente vamos a activar el burpsuite

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/5.png" width="1000">
</p><br>

Y ya teniendo el burpsuite listo, vamos a enviar la petición para cambiar el correo de la cuenta.


<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/6.png" width="1000">
</p><br>

Con la petición vamos a enviarla al `Repeater` con Ctrl R. Para poder modificarla y enviar la respuesta que nosotros queramos


<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/7.png" width="1000">
</p><br>

Como se puede ver en la siguiente imagen nuestro usuario se ha actualizado el correo mediante un archivo JSON en este caso y en el campo de la respuesta tenemos un ID respectivo al correo asique vamos a ver 
si cambiando el `role` 2 en el archivo JSON tambien se cambia en la respuesta. 

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/8.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/9.png" width="1000">
</p><br>

Copiamos todo el codigo que teniamos en el Repeater y lo pegamos a la zona de proxy para enviar la petición dándole a `forward` para ver que sucede.

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/10.png" width="1000">
</p><br>

Podemos ver que al cambiar el rol se nos ha generado un enlace a un panel de admin y que tenemos más funciones que con el rol que teníamos al principio.

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/11.png" width="1000">
</p><br>

Vamos a eliminar el usuario Carlos y habremos completado el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/12.png" width="1000">
</p><br>


Laboratorio resuelto.

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/13.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_role_can_be_modified_in_user_profile/14.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
