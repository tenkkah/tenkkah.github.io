---
layout: single
title: Reflected XSS into a JavaScript string with single quote and backslash escaped – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected XSS into a JavaScript string with single quote and backslash escaped."
date: 2022-09-07
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - Burpsuite
  - JavaScript
  - XSS
  - Practitioner
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Reflected XSS into a JavaScript string with single quote and backslash escaped."

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/1.png" width="1000">
</p><br>


Lo primero es acceder al laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/2.png" width="1000">
</p><br>

Vamos a escribir alguna palabra aleatorio para ver que nos salta por la pantalla como podemos ver en la siguiente imagen:


<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/3.png" width="1000">
</p><br>

Vamos a ver el código fuente a ver si en el código javascript nos arroja alguna entrada vulnerable y sensible.

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/4.png" width="1000">
</p><br>

Vamos a probar esta vez con unas comillas dobles `(")` a ver de qué forma reacciona:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/5.png" width="1000">
</p><br>

Como podemos ver las comillas dobles las interpreta también como texto, con lo cuál vamos ver si con un script podemos extraer las cookies del usuario ya que no sanetiza correctamente:


<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/6.png" width="1000">
</p><br>

Ejecutamos el payload que la función que hace es saltar un `alert` con la información de las cookies que están almacenadas

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/7.png" width="1000">
</p><br>

Se nos ejecuta el `alert`, de esta forma conseguimos resolver el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/8.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_javascript_string_with_single_quote_and_backslash_escaped/9.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
