---
layout: single
title:  Password reset broken logic – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Password reset broken logic."
date: 2022-09-02
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
  - Authentication
  - Apprentice
tags:
  - Burpsuite
  - Login
  - Fuerza bruta
  - Enumeración
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Password reset broken logic."

## Descripción del laboratorio


<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/1.png" width="1000">
</p><br>


## Pasos 
1. Analizar
Como de costumbre, el primer paso es analizar la funcionalidad del laboratorio, en este caso, la funcionalidad de reinicio. Para esto, restablezca la contraseña para `wiener`.

<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/2.png" width="1000">
</p><br>

La solicitud de la `forgot-password` no parece muy interesante. Contiene algunos encabezados que pueden ser interesantes, pero nada obvio. El cuerpo solo contiene el nombre de usuario.

<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/3.png" width="1000">
</p><br>

Da como resultado que se envíe un correo electrónico al correo electrónico de wiener:


<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/4.png" width="1000">
</p><br>

Hacer clic en el enlace me permite ingresar una nueva contraseña para `wiener`:

<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/5.png" width="1000">
</p><br>

La solicitud POST correspondiente parece mucho más interesante, ya que contiene el nombre de usuario:

<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/6.png" width="1000">
</p><br>

Me pregunto... si solicito una nueva contraseña como wiener, intercepto este POST y cambio el nombre de usuario a carlos:

<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/7.png" width="1000">
</p><br>

La solicitud se procesa con normalidad. Ahora trato de iniciar sesión con las credenciales, solo paso, `carlos:password` y listo:

Y como se puede ver finalmente hemos resuelto el laboratorio:

<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/8.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/password_reset_broken_logic/9.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
