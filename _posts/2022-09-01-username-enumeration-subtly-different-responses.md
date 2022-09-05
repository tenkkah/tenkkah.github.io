---
layout: single
title:  Username enumeration via subtly different responses – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “ Username enumeration via subtly different responses."
date: 2022-09-01
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
  - Authentication
  - Practitioner
tags:
  - Burpsuite
  - Login
  - Fuerza bruta
  - Enumeración
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: " Username enumeration via subtly different responses."

## Descripción del laboratorio

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_different_responses/1.png" width="1000">
</p><br>

## Pasos

## Enumerar nombre de usuario
Como de costumbre, el primer paso es analizar la funcionalidad del laboratorio, en este caso, la funcionalidad de inicio de sesión, e intentar iniciar sesión con algún nombre de usuario y contraseña aleatorios. Esta vez, el mensaje de error es bastante genérico:


<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_different_responses/2.png" width="1000">
</p><br>

En general, esta es una buena práctica para cualquier tipo de funcionalidad de inicio de sesión. Pero se basa en el hecho de que el mensaje de error es 100% idéntico en todos los casos. Si está codificado de forma rígida en varios lugares, existe el riesgo de que haya diferencias menores. Puede ser un simple error tipográfico, algún signo de puntuación o incluso espacios adicionales.

Cargo la página en Burp Intruder, con el nombre de usuario como la única carga útil.

* Tipo de ataque: Sniper.
* Carga útil: lista de nombres de usuario proporcionada

Después de ejecutar la enumeración, necesito encontrar si hay alguna desviación en las respuestas. Cuando inicié sesión con un nombre de usuario aleatorio, la página mostró `Invalid username or password`. Utilizo un filtro de búsqueda negativo para ver si alguna respuesta no coincide con esto:


<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_different_responses/3.png" width="1000">
</p><br>

Y, de hecho, en un caso, el mensaje de error pierde el punto al final.

Nombre de usuario encontrado: `aplicaciones`


## Contraseña de fuerza bruta

Ahora repito el paso, esta vez para el argumento de la contraseña hasta que se encuentre la contraseña correcta.

* Tipo de ataque: Sniper.
* Carga útil: lista de contraseñas de usuario proporcionada

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_different_responses/4.png" width="1000">
</p><br>

Al iniciar sesión correctamente, la página se redirige, por lo que elimino todas las respuestas con `códigos de estado 2xx` (alternativa, filtre las respuestas que no contengan "Nombre de usuario o contraseña no válidos"

## Acceso 

Por último, inicio sesión con la combinación de nombre de usuario y contraseña, o simplemente uso la función "Solicitar en el navegador" de Burps para evitar escribir los resultados y las actualizaciones de laboratorio a:

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_different_responses/5.png" width="1000">
</p><br>

Y como se puede ver finalmente hemos resuelto el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/username_enumeration_different_responses/6.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
