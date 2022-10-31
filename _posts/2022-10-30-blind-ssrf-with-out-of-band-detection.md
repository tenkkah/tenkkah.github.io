---
layout: single
title: Blind SSRF with out-of-band detection – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Blind SSRF with out-of-band detection."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Blind SSRF with out-of-band detection."

## Pasos



<p align="center">
     <img src="/assets/images/portswigger/blind_ssrf_with_out_of_band_redirection/1.png" width="1000">
</p><br>

Vamos a ver la web y vamos a ir a ver los detalles de un producto.

<p align="center">
     <img src="/assets/images/portswigger/blind_ssrf_with_out_of_band_redirection/2.png" width="1000">
</p><br>

Una vez dentro vamos a `interceptar` la petición con el burpsuite de la función `view details`. En este caso podemos ver una petición con bastantes cabeceras, pero vamos a fijarnos en una en específico que es la de `Referer`, lo que implica que ésta es la que se
refiere cuando quiere referirse a una URL, es a donde se dirige.

<p align="center">
     <img src="/assets/images/portswigger/blind_ssrf_with_out_of_band_redirection/3.png" width="1000">
</p><br>

En este caso vamos a usar el `BurpCollaborator Client` para que nos genere una URL a ver si cuando la copiamos y le damos a `poll now` nos llega una petición HTTP.

<p align="center">
     <img src="/assets/images/portswigger/blind_ssrf_with_out_of_band_redirection/4.png" width="1000">
</p><br>

Sí que nos envía una petición HTTP como es el caso y nos redirige a la URL que le habíamos especificado que era la ruta `/test`.

<p align="center">
     <img src="/assets/images/portswigger/blind_ssrf_with_out_of_band_redirection/5.png" width="1000">
</p><br>

Laboratorio realizado.

<p align="center">
     <img src="/assets/images/portswigger/blind_ssrf_with_out_of_band_redirection/6.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
