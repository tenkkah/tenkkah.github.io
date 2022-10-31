---
layout: single
title: Blind OS command injection with out-of-band interaction – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Blind OS command injection with out-of-band interaction."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Blind OS command injection with out-of-band interaction."

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/1.png" width="1000">
</p><br>

Para resolver el laboratorio tenemos que ocasionar una búsqueda DNS al servidor público de Burp Suite (burpcollaborator.net). Para ello, haremos uso de un `Blind OS Command Injection` que se encuentra en la función de feedback.


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/2.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/3.png" width="1000">
</p><br>

Como podemos observar, hay unos cuantos campos a rellenar. Por lo que vamos a rellenarlos:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/4.png" width="1000">
</p><br>

Ahora, antes de enviar el feedback. Preparamos el burp suite para que reciba las peticiones:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/5.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/6.png" width="1000">
</p><br>

Con esto listo, enviamos el feedback para captar la petición:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/7.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/8.png" width="1000">
</p><br>

Esta es la petición que se envía al servidor cuando se envía feedback. Para tratar con ella, la enviamos al repeater pulsando `Ctrl R`:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/9.png" width="1000">
</p><br>

Una vez en el repeater, podemos observar como una petición válida simplemente obtiene una respuesta de estado 200 y no mucho más.

Sin embargo, entre todos los parámetros que se están enviando, vamos a intentar ver si podemos ejecutar un comando en alguno de ellos, y, con ello, realizar una búsqueda DNS al servidor de burp suite:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/10.png" width="1000">
</p><br>

Al realizar esta petición si actualizamos la web, nos daremos cuenta de que hemos resuelto el reto:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/11.png" width="1000">
</p><br>

En este caso, sí que es cierto, que lo mejor para realizar los retos estilo `“out-of-band”` es contar con el Burp Suite PRO para poder hacer uso de la característica de `Burp Collaborator client`:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_out_of_band_interaction/12.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
