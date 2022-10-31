---
layout: single
title: Blind OS command injection with time delays – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Blind OS command injection with time delays."
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
  - Practitioner
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Blind OS command injection with time delays."

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/1.png" width="1000">
</p><br>


Para resolver el laboratorio, tenemos que ocasionar un delay de tiempo de respuesta en el servidor de 10 segundos. Para ello, haremos uso del OS Command Injection que se encuentra en la función de feedback.

Por lo que nos dirigimos la botón de `“Submit feedback”`:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/2.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/3.png" width="1000">
</p><br>

Como podemos observar, hay unos cuantos campos a rellenar. Por lo que vamos a rellenarlos:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/4.png" width="1000">
</p><br>

Ahora, antes de enviar el feedback. Preparamos el burp suite para que reciba las peticiones:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/5.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/6.png" width="1000">
</p><br>


Con esto listo, enviamos el feedback para captar la petición:



<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/7.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/8.png" width="1000">
</p><br>

Esta es la petición que se envía al servidor cuando se envía feedback. Para tratar con ella, la enviamos al repeater pulsando `Ctrl R`:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/9.png" width="1000">
</p><br>

Una vez en el repeater, podemos observar como una petición válida simplemente obtiene una respuesta de estado 200 y no mucho más.

Sin embargo, entre todo los parámetros que se están enviando, vamos a intentar ver si podemos ejecutar un comando en alguno de ellos:

Vamos a usar:
```plaintext
    $(sleep+10)
```


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/10.png" width="1000">
</p><br>

En el campo del mensaje, podemos escapar un comando para que se ejecute y así causemos un delay de respuesta de 10 segundos en el servidor, que era lo que nos pedía el enunciado.

De esta forma, resolvemos el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_time_delays/11.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
