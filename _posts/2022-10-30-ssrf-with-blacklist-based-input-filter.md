---
layout: single
title: SSRF with blacklist-based input filter – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “SSRF with blacklist-based input filter."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "SSRF with blacklist-based input filter."

## Pasos


Este laboratorio tiene una función de verificación de existencias que obtiene datos de un sistema interno.

Para resolver el laboratorio, cambie la URL de verificación de existencias para acceder a la interfaz de administración http://localhost/adminy elimine el usuario carlos.

El desarrollador ha desplegado dos débiles defensas anti-SSRF que deberá eludir.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/1.png" width="1000">
</p><br>

Vamos a ver la web y vamos a ir a ver los detalles de un producto.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/2.png" width="1000">
</p><br>

Una vez dentro vamos a `interceptar` la petición con el burpsuite.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/3.png" width="1000">
</p><br>

Una vez recibida la petición vamos a enviarla al `Repeater` y a darle a `send` a ver que nos devuelve

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/4.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/5.png" width="1000">
</p><br>

En este caso vamos a recodear la url con Ctrl U y a ver si nos devuelve algo, dandole a `send`.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/6.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/7.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/8.png" width="1000">
</p><br>

Nos falta hacer lo mismo en el `&` hay que recodearlo con Ctrl U.
<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/9.png" width="1000">
</p><br>

No ha sido exitoso recodeandolo asi que en este caso vamos a usar `localhost` a ver si podemos acceder.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/10.png" width="1000">
</p><br>

El anterior caso no ha sido exitoso, como sabemos `localhost` se puede representar de esta otra manera `127.0.0.1`, vamos a probar de esa manera:
<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/11.png" width="1000">
</p><br>

Como por detrás quizás esté validando en el servidor que la palabra `admin` no le deje entrar, vamos a codear la `a` de admin para que poder bypassear la sanetización. Y aparte vamos a usar el 127.1 ya que en este caso si los siguientes números son 0, se puede
simplificar la dirección IP de esta manera: `127.1`

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/12.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/13.png" width="1000">
</p><br>

Y efectivamente de esta manera nos ha dejado acceder al panel de admin, en este caso hay que eliminar al usuario Carlos, así que vamos a eliminarlo y de esta forma completamos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/14.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/15.png" width="1000">
</p><br>

Laboratorio realizado.

<p align="center">
     <img src="/assets/images/portswigger/ssrf_with_blacklist_based_input_filter/16.png" width="1000">
</p><br>



¡Un saludo y espero que os sirva de apoyo!
