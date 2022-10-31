---
layout: single
title: Basic SSRF against the local server – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Basic SSRF against the local server."
date: 2022-10-21
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - SSRF
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Basic SSRF against the local server."

## Pasos

Este laboratorio tiene una función de verificación de existencias que obtiene datos de un sistema interno.

Para resolver el laboratorio, cambie la URL de verificación de existencias para acceder a la interfaz de administración http://localhost/adminy elimine el usuario carlos.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/1.png" width="1000">
</p><br>

Vamos a ver la web y vamos a ir a ver los detalles de un producto.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/2.png" width="1000">
</p><br>

Una vez dentro vamos a `interceptar` la petición con el burpsuite.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/3.png" width="1000">
</p><br>

Interceptemos la solicitud HTTP y enviémosla al repetidor.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/4.png" width="1000">
</p><br>

Vamos a pulsar Ctrl Shift U para recodearlo.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/5.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/6.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/7.png" width="1000">
</p><br>

Ahora como nos dice en la descripción del laboratorio que probemos entrar al `http://localhost/admin` de la máquina vamos a ver si nos da acceso cuando le demos a `send`.
La respuesta en este caso podemos darle a la vista de `render` para visualizar el contenido como se vería la respuesta y nos sale el panel de admin el cual antes no nos aparecía.


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/8.png" width="1000">
</p><br>

Una vez accedidos al panel de admin, vamos a copiar la `ruta de el usuario Carlos` para eliminarlo y así completar el laboratorio.


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/9.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/10.png" width="1000">
</p><br>
 
Laboratorio realizado

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/11.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_the_local_server/12.png" width="1000">
</p><br>




¡Un saludo y espero que os sirva de apoyo!
