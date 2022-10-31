---
layout: single
title: Stored DOM XSS – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Stored DOM XSS."
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
  - Practitioner
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Stored DOM XSS."

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/1.png" width="1000">
</p><br>

En este caso, el enunciado nos dice que existe una vulnerabilidad de XSS del tipo DOM almacenado en la funcionalidad de comentario del blog. Para resolver el laboratorio debemos de explotar la vulnerabilidad y ejecutar la función `alert`.

Dicho esto, lo primero de todo es acceder al laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/2.png" width="1000">
</p><br>

Una vez accedidos, podemos observar como hay distintos artículos, en este caso, vamos a ver el primero:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/3.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/4.png" width="1000">
</p><br>

Al acceder a un artículo, podemos observar como hay una zona de comentarios:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/5.png" width="1000">
</p><br>

En este caso, simplemente vamos a llenarla con datos random y a publicar un comentario:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/6.png" width="1000">
</p><br>

Una vez publicado, volvemos al artículo para ver nuestro comentario:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/7.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/8.png" width="1000">
</p><br>

Sin problemas se ha publicado.

Si investigamos un poco el código fuente y las distintas dependencias (archivos JS), podemos encontrar el siguiente archivo de JavaScript, llamado `loadComments.js`:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/9.png" width="1000">
</p><br>

El archivo, entre otras cosas, posee una función que reemplaza los simbolos `>` y `<`, HTML encodeandolos cuando se carga los comentarios.

Aquí es donde está el fallo, está usando el método `replace` para la sustitución. Este método únicamente reemplaza la primera ocurrencia que encuentra, por ejemplo, si tengo la palabra patata y utilizo la función `replace` para sustituir las `‘a’` por una `‘e’`, el resultado de implementar este método en la palabra patata dará como resultado: `petata`.

Por lo que, teniendo en cuenta este funcionamiento, podemos crear un payload típico de XSS, pero colocando al principio de este <> para que sean los que el script sustituya y no los símbolos usados en el código malicioso:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/10.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/11.png" width="1000">
</p><br>

De esta manera, al publicar el comentario y volver al post:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/12.png" width="1000">
</p><br>

Conseguimos ejecutar el código javascript que habiamos puesto, en este caso, el `alert`.

De esta forma, conseguimos resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/13.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/stored_dom_xss/14.png" width="1000">
</p><br>
¡Un saludo y espero que os sirva de apoyo!
