---
layout: single
title: SSRF with whitelist-based input filter – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “SSRF with whitelist-based input filter."
date: 2022-10-30
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - SSRF
  - Practitioner
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "SSRF with whitelist-based input filter."

## Pasos



<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/1.png" width="1000">
</p><br>

Vamos a `ver los detalles` de los productos e interceptar la petición con el burpsuite. 

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/2.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/3.png" width="1000">
</p><br>

Con la petición vamos a coger la URL y decodearla con `Ctrl U`. Una vez decodeado hay que codear también el `&`.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/4.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/5.png" width="1000">
</p><br>

Vamos a enviar la petición al `Repeater` con Ctrl R y ver si poniendo `localhost/admin` nos devuelve un panel de admin. En este caso cuando enviamos la petición nos dice que `stock.weliketoshop.com` tiene que estar también en la URL. 

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/6.png" width="1000">
</p><br>

Vamos a poner en la url la dirección que nos pide obligatoriamente y con el nombre `user`, en este caso no nos da ningún error así que hay que ver sobre esta URL como podemos implementar el `localhost`.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/7.png" width="1000">
</p><br>

Finalmente vamos a ver si introduciendo `localhost` y seguidamente el `#` para acceder al propio localhost y accediendo a una sección de la página que en este caso sería `stock.weliketoshop.com`. 

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/8.png" width="1000">
</p><br>

Vamos a recodear el `#` por si en este caso está saneando por el lado del servidor. Cómo podemos ver nos da una respuesta `200 OK`, hemos podido acceder al panel de admin, ahora vamos a eliminar al usuario Carlos y ya estaría completado el laboratorio

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/9.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/10.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/11.png" width="1000">
</p><br>

Laboratorio realizado.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_whitelist_based_input_filter/12.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
