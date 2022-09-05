---
layout: single
title: Reflected DOM XSS – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected DOM XSS."
date: 2022-09-04
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
  - XSS
  - Practitioner
tags:
  - Burpsuite
  - JavaScript
  - XSS
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Reflected DOM XSS."

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/1.png" width="1000">
</p><br>

En este caso se nos indica que el servidor procesa los datos de una petición y lo muestra los datos de la respuesta. Posteriormente, un script de la página procesa los datos reflejados de una forma insegura. Para resolver el laboratorio debemos de ejecutar la `función alert`.

Dicho esto, lo primero de todo es acceder al laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/2.png" width="1000">
</p><br>

Una vez accedidos, podemos observar un formulario que nos permite buscar en el blog. Para analizar mejor el comportamiento de esta funcionalidad, abrimos el burp suite y activamos el proxy en el navegador:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/3.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/4.png" width="1000">
</p><br>

Con esto hecho, probamos a hacer cualquier búsqueda:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/5.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/6.png" width="1000">
</p><br>

Cuando damos a “Buscar”, se genera la petición que podemos observar arriba. No hay mucha información, además de que en el enunciado nos hacen el spoiler de que la vulnerabilidad está en un script inseguro, por lo que podemos suponer que la primera petición de búsqueda no tiene mucha historia, por lo que simplemente la enviamos.

Cuando enviamos la primera petición de búsqueda, si mantenemos el `intercept` del burp suite puesto, interceptaremos la siguiente petición:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/7.png" width="1000">
</p><br>

Esta tiene pinta que ha sido generada por el frontend del recurso que se solicitó en la primera petición `(/?search=test)`. Para analizar mejor su respuesta, la pasamos al repeater:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/8.png" width="1000">
</p><br>

El servidor nos devuelve una respuesta en formato JSON, donde en la parte inferior podemos observar el término de búsqueda que hemos colocado.

Podemos probar a intentar escaparnos del contexto del JSON en este caso, por ejemplo, a intentar meter un `alert`:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/9.png" width="1000">
</p><br>

En la respuesta podemos observar como en principio parece que sin problemas podemos inyectar y escaparnos del JSON, ya que no hay ningun tipo de sanitización, por lo que, usando el payload de arriba, lo colocamos en la petición que dejamos en el proxy, y lo enviamos:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/10.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/11.png" width="1000">
</p><br>

De esta manera, conseguimos obtener un XSS y resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/12.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/reflected-dom-xss/13.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
