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

En este ejemplo, hay un dispositivo en la red interna que permite el acceso no autenticado a la interfaz de administración. Dado que no podemos acceder a este dispositivo externamente, 
necesitaremos aprovechar la vulnerabilidad SSRF en el servidor web externo para comunicarnos con él. Para empezar, sabemos que la red interna utiliza el siguiente esquema de red interna: 192.168.0.0/24. 
<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/1.png" width="1000">
</p><br>

Vamos a ver la web y vamos a ir a ver los detalles de un producto.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/2.png" width="1000">
</p><br>

Una vez dentro vamos a `interceptar` la petición con el burpsuite.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/3.png" width="1000">
</p><br>

Interceptemos la solicitud HTTP y enviémosla al `Repeater`

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/4.png" width="1000">
</p><br>

Vamos a pulsar Ctrl Shift U para recodearlo.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/5.png" width="1000">
</p><br>

Cómo sabemos la URL a la que tenemos que acceder vamos a poner directamente la `URL`, como no sabemos la dirección ip de la red interna vamos a hacer un ataque de `fuzzing` a la IP.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/6.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/7.png" width="1000">
</p><br>

En este caso vamos a irnos al `Intruder` con Ctrl I y vamos a coger el último dígito de la dirección IP ya que como hemos visto en la descripción del laboratorio el rango de la IP sabemos que es desde el 192.168.0.X hasta el 192.168.0.254, en este caso vamos a hacer
un ataque de fuerza bruta. Vamos a añadirle un payload al ñultimo dñigito de la IP para fuzzearla.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/8.png" width="1000">
</p><br>

Como vemos en la sección del payload vamos a seleccionar un `único payload de tipo number` y que sea secuencia de 1 en 1 desde el `rango 1 hasta el 254` y comenzamos el ataque.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/9.png" width="1000">
</p><br>

Finalmente damos con el `206` que nos da un `200` por parte del servidor así que es funcional.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/10.png" width="1000">
</p><br>
 
Finalmente vamos a copiar la IP entera valida que en este caso es la `192.168.0.206`, nos vamos al Repeater y enviamos la petición y como vemos si renderizamos la petición nos aparece el `panel de admin` el cual no teniamos acceso desde la máquina.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/11.png" width="1000">
</p><br>

Vamos al código y vemos que hay una `ruta para eliminar al usuario Carlos` así que la copiamos y enviamos la petición y de esta forma finalmente completamos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/12.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/basic_ssrf_against_another_backend_system/13.png" width="1000">
</p><br>



¡Un saludo y espero que os sirva de apoyo!
