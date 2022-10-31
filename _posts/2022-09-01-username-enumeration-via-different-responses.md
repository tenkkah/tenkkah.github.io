---
layout: single
title:  Username enumeration via different responses – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “ Username enumeration via different responses."
date: 2022-09-01
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - Burpsuite
  - Login
  - Fuerza bruta
  - Enumeración
  - Authentication
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Username enumeration via different responses."

## Pasos

Al iniciar el laboratorio, vaya a la página de inicio de sesión e ingrese cualquier nombre de usuario y contraseña para probar la página de inicio de sesión. En este caso, ingresé Nombre de usuario: usuario y Contraseña: contraseña.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/1.png" width="1000">
</p><br>


A continuación, usamos Burp Suite para interceptar el tráfico web configurando un proxy web. Tenemos que enviar esta intercepción al `intruder` para que podamos preparar nuestro ataque.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/2.png" width="1000">
</p><br>

Aquí, en la pestaña de posiciones, configuramos el tipo de ataque en `Sniper` donde solo atacamos un parámetro. Necesitamos hacer clic en el botón Borrar a la derecha para borrar los resaltados predeterminados creados por Burp Suite. Ahora resalte el parámetro que queremos atacar, que en este caso es el `nombre de usuario`. Después de resaltar, haga clic en el botón Agregar para seleccionar el parámetro para el ataque.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/3.png" width="1000">
</p><br>


A continuación, en `Intruder`, vaya a `cargas útiles` y, en las opciones de carga útil, haga clic en el botón Cargar para seleccionar la lista de nombres de usuario (para esta práctica de laboratorio se proporciona la lista de nombres de usuario y contraseñas).

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/4.png" width="1000">
</p><br>

Una vez hecho esto, vuelve a la pestaña de posiciones y selecciona atacar.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/5.png" width="1000">
</p><br>

Una vez realizado el ataque, revisa la lista y encontrarás un nombre de usuario, “ao” con un estado de “302” que es diferente al resto. Esto indica que este podría ser un nombre de usuario potencial.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/6.png" width="1000">
</p><br>

Volvamos a la página de inicio de sesión e intentemos iniciar sesión con `ao` y `cualquier password`.

Aquí vemos que en lugar de la notificación de error de “Usuario no válido”, esta vez la notificación es “Contraseña incorrecta”. Con esto, sabemos que el nombre de usuario que acabamos de usar es el correcto. A continuación, podemos centrarnos en hacer un ataque de fuerza bruta en el parámetro de contraseña.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/7.png" width="1000">
</p><br>

Interceptemos nuevamente la solicitud de publicación desde la página de inicio de sesión y enviémosla al intruso usando el `modo de sniper`.

A continuación, el parámetro que queremos atacar es la contraseña.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/8.png" width="1000">
</p><br>

Igual que antes, tenemos que cargar nuestra carga útil, pero esta vez usando la lista de contraseñas. Una vez que esté cargado, comencemos el ataque.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/9.png" width="1000">
</p><br>

Aquí podemos ver que la contraseña tiene un estado de 302 que es diferente al resto. En este caso, sabemos que esa sería la contraseña del usuario: ao.

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/10.png" width="1000">
</p><br>

Usando la credencial `"ao" como el nombre de usuario y "password" como clave `, podemos iniciar sesión correctamente e ir a la página "Mi cuenta" para resolver este laboratorio.

Tenga en cuenta que el nombre de usuario y la contraseña cambian para cada nueva sesión de laboratorio.


<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/11.png" width="1000">
</p><br>

Y como se puede ver finalmente hemos resuelto el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_via_responses/12.png" width="1000">
</p><br>



¡Un saludo y espero que os sirva de apoyo!
