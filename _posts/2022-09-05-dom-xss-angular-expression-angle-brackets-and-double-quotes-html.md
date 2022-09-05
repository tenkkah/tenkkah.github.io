---
layout: single
title: DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded."

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/1.png" width="1000">
</p><br>


En este caso, se nos indica que la web usa Angular, y que, además, existe un DOM based XSS en la funcionalidad de búsqueda. Para completar el laboratorio, tenemos que ejecutar la función `alert`.

Lo primero de todo es acceder al laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/2.png" width="1000">
</p><br>

Una vez accedidos, probamos la funcionalidad de búsqueda:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/3.png" width="1000">
</p><br>



<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/4.png" width="1000">
</p><br>

En principio no se ve nada raro. Sin embargo, si miramos el código fuente:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/5.png" width="1000">
</p><br>

Podemos ver como en el body se establece un atributo el cual es `ng-app`. Ng-app es una directiva que se define un elemento raiz de angular, y, por tanto, define que comienza la aplicación de angular.

Claro, definiendo en el tag body de HTML que empieza la aplicación de angular, en todo el código que haya dentro, se interpretará cualquier sentencia de angular que se añada. Y gracias a la funcionalidad de búsqueda, podemos controlar un parámetro que se colocará dentro de la parte definida como aplicación de angular.

Sabiendo esto, usaremos el payload:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/10.png" width="1000">
</p><br>

Vamos a explicar el payload:

* Los dobles corchetes sirven para que se trate como una expresión de angular.
* El `constructor.constructor`, básicamente se interpreta igual que una función, es como si declarásemos una función y dentro de esta colocáramos el código que se ejecutará, pues aquí es exactamente lo mismo, dentro de los paréntesis, colocamos lo que queremos que se ejecute, en este caso un `alert(1)`.

Sabiendo esto, mandamos el payload mencionado, ya que recordemos que este se verá reflejado dentro de la parte que es declarada como angular gracias al `ng-app`:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/6.png" width="1000">
</p><br>

Y, por lo tanto, se interpretará como hemos explicado y ejecutará:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/7.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/8.png" width="1000">
</p><br>

De esta forma, conseguimos resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_angular_expression_angle_brackets_and_double_quotes_html_encoded/9.png" width="1>
</p><br>



¡Un saludo y espero que os sirva de apoyo!
