---
layout: single
title: DOM XSS in jQuery selector sink using a hashchange event – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio: “DOM XSS in jQuery selector sink using a hashchange event”:
"
date: 2022-08-31
classes: wide
#header:
#  teaser: /assets/images/portswigger/xss_into_html_context_with_nothing_encoded/portada.png
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

En este post vamos a estar resolviendo el laboratorio: “DOM XSS in jQuery selector sink using a hashchange event”:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/1.png" width="1000">
</p><br>

Para resolver el laboratorio, tenemos que enviar a una víctima un exploit que aproveche la vulnerabilidad del laboratorio para ejecutar la función `print()`.

Lo primero de todo es acceder al laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/2.png" width="1000">
</p><br>

En este caso, no vemos ninguna barra de búsqueda o página de feedback como ha ocurrido en otros retos de XSS. Sin embargo, si nos vamos al código fuente, nos encontramos con el siguiente trozo de código:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/3.png" width="1000">
</p><br>

Este código, básicamente lo que hace es que cuando se especifica en la URL algo después de un hashtag, busca este valor en la web y hace un scroll hasta la coincidencia.

Por ejemplo, si nos vamos abajo del todo del laboratorio, podemos ver como hay un post que tiene la palabra “Resume” en el título:


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/4.png" width="1000">
</p><br>

Sabiendo esto, vamos a buscar por:

```plaintext
❯ <URL>/#Resume
```

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/5.png" width="1000">
</p><br>

Damos enter.

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/6.png" width="1000">
</p><br>

Y aunque en la imagen no se pueda apreciar, nos redirige automáticamente hacia el post que contiene la palabra.

Para ver como explotar esto, vamos a traer el código de nuevo:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/7.png" width="1000">
</p><br>

Como podemos observar, realmente lo que ocurre en el código, es que cuando especificamos algo después del hashtag, jQuery intenta busca un elemento h2 que contenga lo que hemos dicho. Cuando encuentra el elemento, este se almacena en la variable post, por lo que ahora, lo que contiene es un elemento de jQuery que se ve de la siguiente forma:


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/8.png" width="1000">
</p><br>

Posteriormente, si la variable post tiene algun dato almacenado, se obtiene el primer elemento del objeto jQuery y se usa el método scrollIntoView().

Aqui la vulnerabilidad como tal, se encuentra en la primera linea, en el selector sink de jQuery `($())`:


<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/9.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/10.png" width="1000">
</p><br>

Si no se sanitiza bien, lo que ocurre en aproximadamente en el código es lo siguiente:
* $(‘section.blog-list h2:contains(‘ + decodeURIComponent(window.location.hash.slice(1)) + ‘)’);
* $(‘section.blog-list h2:contains(‘ + Hola + ‘)’);

Por lo tanto, si ponemos un payload como el siguiente:

```plaintext
❯ <img src=/ onerror=print()>
```

Mas o menos, ocurriría algo así:
* $(‘section.blog-list h2:contains(‘ + <img src=/ onerror=print()> + ‘)’);
 
De esta forma, se interpretaría. Vamos a probarlo:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/11.png" width="1000">
</p><br>


Damos enter:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/12.png" width="1000">
</p><br>

Y efectivamente se ejecuta. Ahora tenemos que crear un exploit que mandemos a la víctima y se haga uso de esta vulnerabilidad. Para ello nos vamos al servidor del exploit:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/13.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/14.png" width="1000">
</p><br>

En este caso, la idea es automatizar la explotación usando un simple `<iframe>`:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/15.png" width="1000">
</p><br>

Antes de enviarlo vamos a ver como se vería:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/16.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/17.png" width="1000">
</p><br>

La victima al visitar una web con nuestro código, vería lo que estamos viendo, un pequeño iframe de la web, e inmediatamente después de que cargase la web, se ejecutaría la `función print()`:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/18.png" width="1000">
</p><br>

Por lo que, viendo que funciona. Simplemente lo guardamos y lo enviamos a la víctima:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/19.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/20.png" width="1000">
</p><br>

De esta forma, conseguimos resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/21.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/dom_xss_jquery_selector_sink_haschange_event/22.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
