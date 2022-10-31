---
layout: single
title: Blind OS command injection with output redirection – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Blind OS command injection with output redirection."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Blind OS command injection with output redirection."

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/1.png" width="1000">
</p><br>

Para resolver el laboratorio, tenemos que ejecutar el comando `whoami` en el servidor y leer su salida. Para ello, haremos uso de un `Blind OS Command Injection` que se encuentra en la función de feedback.


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/2.png" width="1000">
</p><br>



<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/3.png" width="1000">
</p><br>

Como podemos observar, hay unos cuantos campos a rellenar. Por lo que vamos a rellenarlos:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/4.png" width="1000">
</p><br>

Ahora, antes de enviar el feedback. Preparamos el burp suite para que reciba las peticiones:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/5.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/6.png" width="1000">
</p><br>

Con esto listo, enviamos el feedback para captar la petición:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/7.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/8.png" width="1000">
</p><br>

Esta es la petición que se envía al servidor cuando se envía feedback. Para tratar con ella, la enviamos al repeater pulsando `Ctrl R`:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/9.png" width="1000">
</p><br>

Una vez en el repeater, podemos observar como una petición válida simplemente obtiene una respuesta de estado 200 y no mucho más.

Sin embargo, entre todos los parámetros que se están enviando, vamos a intentar ver si podemos ejecutar un comando en alguno de ellos, y no solo eso, sino redirigir el output a un directorio que podamos acceder. Para de esta forma, poder leer la salida del comando que hemos ejecutado.

Lo primero es determinar a que directorio podemos redirigir la salida de los comandos. Para ello, en este caso, vamos a usar el directorio donde se almacenan las imágenes, que en este caso se nos indica en la descripción del laboratorio:

* /var/www/images

Sabiendo esto, vamos a intentar realizar un `Blind OS Command Injection` redirigiendo la salida del comando a un archivo en el directorio de arriba:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/10.png" width="1000">
</p>

```plaintext
$(whoami > /var/www/images/whoami.txt)
```

Como se trata de un `Blind OS Command Injection`, no podemos ver la salida en la respuesta del servidor. Por lo que para confirmar si ha funcionado, tendremos que acceder al archivo al cual hemos redirigido la salida del comando.

Para acceder al archivo en cuestión, como lo hemos puesto en una carpeta llamada `“images“`. Podemos suponer, que quizás se haya guardado en la misma ruta que por ejemplo las imágenes de las portadas de los productos de la web:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/11.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/12.png" width="1000">
</p><br>

Se acceden a las imágenes a través del parámetro `filename` del archivo `image`, por lo que vamos a sustituir el valor de este parámetro por el nombre del archivo al que hemos redirigido la salida del comando, en este caso, `whoami.txt`:

<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/13.png" width="1000">
</p><br>

De esta forma, conseguimos resolver el laboratorio:


<p align="center">
     <img src="/assets/images/portswigger/blind_os_command_injection_with_output_redirection/14.png" width="1000">
</p><br>







¡Un saludo y espero que os sirva de apoyo!
