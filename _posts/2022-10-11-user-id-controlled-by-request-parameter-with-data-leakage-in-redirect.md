---
layout: single
title: User ID controlled by request parameter with data leakage in redirect – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “User ID controlled by request parameter with data leakage in redirect."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "User ID controlled by request parameter with data leakage in redirect."

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/1.png" width="1000">
</p><br>

Según entramos al laboratorio vemos una tienda con un enlace para poder loguearnos, pero nosotros queremos saber si hay algún panel de administración donde poder loguearnos

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/2.png" width="1000">
</p><br>

Nos vamos a loguear con las credenciales que nos dicen en la descripción del laboratorio como usuario `wiener` y password `peter`. Y activamos el burpsuite para enviar la petición.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/3.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/4.png" width="1000">
</p><br>

Como vemos en la respuesta cada usuario está identificado con un ID, entonces vamos a ver si cambiando el nombre del usuario podemos loguearnos con ese mismo usuario.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/5.png" width="1000">
</p><br>

Enviamos la petición al Repeater con `Ctrl R` 

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/6.png" width="1000">
</p><br>

Vemos que ya tenemos la petición en el repeater para ver que nos devuelve con el usuario wiener por defecto, con el que nos hemos logueado. Ahora vamos a ver si con el usuario Carlos que es el que nos dice en la
descripción nos devuelve que hemos podido loguearnos. 

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/7.png" width="1000">
</p><br>

Cambiamos el nombre de usuario de wiener a carlos y vemos que si le damos a `send` nos devuelve la `API Key` de Carlos que es la solución al laboratorio. Asique con esto concluímos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/8.png" width="1000">
</p><br>


Laboratorio resuelto.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/9.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_data_leakage_in_redirect/10.png" width="1000">
</p><br>



¡Un saludo y espero que os sirva de apoyo!
