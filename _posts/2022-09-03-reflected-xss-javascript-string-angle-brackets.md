---
layout: single
title: Reflected XSS into a JavaScript string with angle brackets HTML encoded – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected XSS into a JavaScript string with angle brackets HTML encoded."
date: 2022-09-03
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
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Reflected XSS into a JavaScript string with angle brackets HTML encoded."

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/1.png" width="1000">
</p><br>


En este caso, para resolver el reto tenemos que inyectar un payload que escape del string donde se encuentra y llame a la función alert.

Lo primero de todo es acceder al laboratorio:


<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/2.png" width="1000">
</p><br>

Una vez accedemos, nos encontramos ante una barra de búsqueda, por lo que vamos a usarla buscando una palabra aleatoria:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/3.png" width="1000">
</p><br>

Cuando hacemos la búsqueda, podemos observar como la palabra que hemos buscado, se encuentra, entre otros sitios en la siguiente parte del código fuente.

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/4.png" width="1000">
</p><br>

Como podemos observar, es un string. Puedes pensar, ok, cierro la variable, pongo un alert y listo, una cosa así:

* var searchTerms= ' alert('XSS') '

Pero esto no es válido, ya que JavaScript no permite espacios en una variable, por esa misma razón para que toda la cadena se tome como parte de la variable, y aun así, el alert se ejecute, se concatena usando un guion. En el siguiente >

Dicho esto, colocamos un payload como:

* ' '-alert('XSS')-' '


<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/5.png" width="1000">
</p><br>

Y cuando le demos a buscar:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/6.png" width="1000">
</p><br>

Se habrá ejecutado el `alert`. En el código fuente, se verá de la siguiente forma:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/7.png" width="1000">
</p><br>

Con esto, completamos el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_javascript_string_angle_brackets/8.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
