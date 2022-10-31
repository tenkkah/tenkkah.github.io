---
layout: single
title: 2FA simple bypass – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “ Username enumeration via different responses."
date: 2022-09-02
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
  - Bypass
  - Authentication
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "2FA simple bypass."

## Descripción del laboratorio

<p align="center">
     <img src="/assets/images/portswigger/2fa-simple-bypass/1.png" width="1000">
</p><br>

## Pasos

## Iniciar sesión como "wiener"
Como de costumbre, abro la aplicación e inicio sesión con la cuenta wiener. En la parte superior de la pantalla hay un botón `Email client`. Cuando me piden el código de seguridad de 4 dígitos, utilizo el cliente de correo electrónico p>

<p align="center">
     <img src="/assets/images/portswigger/2fa-simple-bypass/2.png" width="1000">
</p><br>

Posteriormente, la página ` /my-account` carga.

## Iniciar sesión como "carlos"

Ahora trato de iniciar sesión como `carlos`. Como no tengo acceso a su cliente de correo electrónico, no puedo recuperar el código 2FA.

Conozco el flujo de trabajo normal después de un inicio de sesión exitoso: se redirige a `/my-account`. ¿Qué sucede si yo, en lugar de intentar encontrar el código 2FA, cambio manualmente la URL y solicito la página `my-account` después>

Resulta que la operación de inicio de sesión ya se realizó después del primer paso de la autenticación 2FA. Ingresar un código incorrecto desencadena un cierre de sesión. Omitirlo manualmente y acceder directamente a la URL de la página>


<p align="center">
     <img src="/assets/images/portswigger/2fa-simple-bypass/3.png" width="1000">
</p><br>

Y como se puede ver finalmente hemos resuelto el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/2fa-simple-bypass/4.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!


