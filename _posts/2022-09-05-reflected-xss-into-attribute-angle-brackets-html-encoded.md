---
layout: single
title: Reflected XSS into attribute with angle brackets HTML-encoded – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected XSS into attribute with angle brackets HTML-encoded."
date: 2022-09-05
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
  - XSS
  - Apprentice
tags:
  - Burpsuite
  - JavaScript
  - XSS
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Reflected XSS into attribute with angle brackets HTML-encoded."

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/1.png" width="1000">
</p><br>


En este caso, para resolver el reto tenemos que inyectar un atributo que nos ejecute un `alert`.

Lo primero de todo es acceder al laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/2.png" width="1000">
</p><br>

Una vez accedemos, nos encontramos ante una barra de búsqueda, por lo que vamos a usarla buscando una palabra aleatoria:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/3.png" width="1000">
</p><br>



<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/4.png" width="1000">
</p><br>

Cuando buscamos, si nos fijamos aquí ocurren varias cosas:

1. En este caso no hay resultados, pero eso es lo de menos.
2. En la URL se nos añade el parámetro `search`.
3. Lo que buscamos, acaba siendo el valor del atributo `value` en el elemento `input`.

Teniendo en cuenta los dos últimos puntos, podemos crear un payload que nos cree un nuevo atributo dentro del elemento input para que se nos ejecute un `alert`. En este caso el payload es:

* “onmousemove=”alert(1)

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/5.png" width="1000">
</p><br>

De esta forma, buscando por el payload que hemos especificado arriba, conseguimos resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/6.png" width="1000">
</p><br>

Parece que no ha ocurrido nada a nivel de ejecutar el `alert`, sin embargo, si pasamos el ratón por encima de la palabra:


<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/7.png" width="1000">
</p><br>

Se nos ejecuta. De esta forma conseguimos resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/reflected_xss_into_attribute_with_angle_brackets_html_encoded/8.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
