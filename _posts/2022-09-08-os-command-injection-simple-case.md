---
layout: single
title: OS command injection, simple case – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “OS command injection, simple case."
date: 2022-09-08
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - Burpsuite
  - JavaScript
  - OS Command Injection
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "OS command injection, simple case."

<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/1.png" width="1000">
</p><br>

Para resolver el laboratorio, tenemos que ejecutar el comando `whoami` en el servidor. Para ello, tenemos que hacer uso del `OS Command Injection` que se encuentra en la comprobación de stock de los productos.

Por lo que vamos a dirigirnos a un producto cualquiera de la web:

<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/2.png" width="1000">
</p><br>

Dentro del producto elegido, podemos ver como tiene un apartado para comprobar el stock:


<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/3.png" width="1000">
</p><br>

Si damos click:


<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/4.png" width="1000">
</p><br>

Simplemente, se nos mostrará el stock del producto. Ahora bien, vamos a interceptar la petición que hace el cliente al darle click a este botón, a su vez, preparamos el burp suite para recibirla:


<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/5.png" width="1000">
</p><br>



<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/6.png" width="1000">
</p><br>



<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/7.png" width="1000">
</p><br>



<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/8.png" width="1000">
</p><br>

Una vez interceptada la petición, la mandamos al Repeater pulsando `Ctrl R`:


<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/9.png" width="1000">
</p><br>


Como vemos, es una petición normal. Sin embargo, vamos a probar a cambiar el valor del `storeId`:


<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/10.png" width="1000">
</p><br>

Vemos un error de `sh`, lo que quiere decir que el `valor del storeId` se está pasando a un programa de Linux. Sabiendo esto, podemos probar a hacer un `OS Command Injection` bastante simple:

<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/11.png" width="1000">
</p><br>

En este caso, simplemente usando un `punto y coma` para separar el valor para que se trate como otro comando nos sirve para aislar el `comando whoami` de lo anterior y que se ejecute. De esta forma, conseguimos resolver el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/os_command_injection_simple_case/12.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
