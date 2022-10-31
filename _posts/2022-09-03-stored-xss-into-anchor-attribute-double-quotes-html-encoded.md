---
layout: single
title: Stored XSS into anchor href attribute with double quotes HTML-encoded – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Stored XSS into anchor href attribute with double quotes HTML-encoded."
date: 2022-09-04
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Stored XSS into anchor href attribute with double quotes HTML-encoded."

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/1.png" width="1000">
</p><br>


En este caso, para resolver el laboratorio tenemos que escribir un comentario que llame a la `función alert` cuando se haga click en el nombre del autor del comentario.

Lo primero de todo es acceder al laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/2.png" width="1000">
</p><br>

Una vez accedemos, podemos ver como hay distintos artículos, nos metemos en el primero de ellos (podríamos meternos en cualquiera):


<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/3.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/4.png" width="1000">
</p><br>

Una vez dentro, podemos observar que hay una zona de comentarios:


<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/5.png" width="1000">
</p><br>


Por lo que vamos a escribir un comentario cualquiera:

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/6.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/7.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/8.png" width="1000">
</p><br>


Cuando enviamos un comentario, este se escribe y almacena en la web. Podemos observar como en el comentario que hemos puesto hay un hipervínculo. Si vemos su código fuente, podemos observar como el `atributo href` corresponde al campo de “Website” de cuando se escribe un comentario:

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/9.png" width=>
</p><br>


Por lo que sabiendo esto, podemos escribir en el campo de “Website” un payload que nos ejecute un `alert` cuando se de click en el nombre del autor:

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/10.png" width=>
</p><br>

Enviamos el comentario y...

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/11.png" width=>
</p><br>

¡Completamos el laboratorio! Si volvemos a la zona de comentarios y observamos el código fuente, podemos ver como se ha colocado nuestro payload:

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/12.png" width=>
</p><br>

Y si damos click en “test”:

¡Se nos ejecuta!

<p align="center">
     <img src="/assets/images/portswigger/stored_xss_into_anchor_attribute_double_quotes_html_encoded/13.png" width=>
</p><br>

¡Un saludo y espero que os sirva de apoyo!
