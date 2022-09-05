---
layout: single
title: DOM XSS in document.write sink using source location.search inside a select element – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “DOM XSS in document.write sink using source location.search inside a select element."
date: 2022-09-05
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "DOM XSS in document.write sink using source location.search inside a select element."

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/1.png" width="1000">
</p><br>

En este caso, para resolver el reto tenemos que escaparnos del elemento “select” y llamar a la función `alert`.

Lo primero de todo es acceder al laboratorio:


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/2.png" width="1000">
</p><br>

Una vez hemos accedido, podemos ver varios productos. Vamos a entrar en uno cualquiera:


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/3.png" width="1000">
</p><br>

Cuando entramos, podemos observar una función para comprobar el stock en las distintas ciudades:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/4.png" width="1000">
</p><br>



<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/5.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/6.png" width="1000">
</p><br>

Si observamos el código fuente de la web, podemos encontrar el siguiente código:


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/7.png" width="1000">
</p><br>

Analizando un poco el script, básicamente se entiende que además de las tres ciudades por defecto para comprobar el stock, se le puede agregar una más a través de la variable `storeId` de la URL. Por lo que podemos probar a añadir esa variable y un valor cualquiera:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/8.png" width="1000">
</p><br>

Una vez accedemos a la web de nuevo pero con la variable `storeId`, si nos fijamos en las ciudades:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/9.png" width="1000">
</p><br>

Podemos ver como se ha agregado una más, en concreto una con el nombre del valor que le hemos pasado a la variable.

Si nos vamos de nuevo al código fuente, podemos observar como este parámetro se implementa:


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/10.png" width="1000">
</p><br>

Por lo que, observando esto, podemos intentar poner un valor que ocasione que nos escapemos del propio elemento `options`, y ejecute un `alert`:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/11.png" width="1000">
</p><br>

Al acceder a la web con este valor en la variable:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/12.png" width="1000">
</p><br>

Se nos ejecuta el `alert`. En el código fuente, podemos observar lo siguiente:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/13.png" width="1000">
</p><br>

Y de esta forma, conseguimos resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_in_document_write_sink_using_source_location_search_inside_select_element/14.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
