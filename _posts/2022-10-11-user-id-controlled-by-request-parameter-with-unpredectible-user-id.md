---
layout: single
title: User ID controlled by request parameter, with unpredictable user IDs – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “User ID controlled by request parameter, with unpredictable user IDs."
date: 2022-10-11
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - Burpsuite
  - JavaScript
  - Access control vulnerabilities
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "User ID controlled by request parameter, with unpredictable user IDs."

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/1.png" width="1000">
</p><br>

Según entramos al laboratorio vemos una tienda con un enlace para poder loguearnos, pero nosotros queremos saber si hay algún panel de administración donde poder loguearnos

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/2.png" width="1000">
</p><br>

Vamos a loguearnos con el user `wiener` y las password `peter`, seguidamente vamos a cambiar el correo de la cuenta a uno que nosotros queramos

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/3.png" width="1000">
</p><br>


Seguidamente vamos a activar el burpsuite

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/4.png" width="1000">
</p><br>

Y ya teniendo el burpsuite listo, vamos a enviar la petición para loguearnos con el usuario.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/5.png" width="1000">
</p><br>

Vamos a ver que nos devuelve la petición al loguearnos con el user `wiener`. En este caso vamos a enviar la petición dándole a `forward` y vemos que el usuario `wiener` tiene un ID identificativo.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/6.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/7.png" width="1000">
</p><br>

Al loguearnos en la URL aparece el id de nuestro usuario el que hemos visto antes, el mismo y es identificativo y único para cada usuario. Asique vamos a ver si podemos de alguna forma obtener el `ID` de un usuario distinto al nuestro 
y poder loguearnos de alguna forma sin saber su `password`.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/8.png" width="1000">
</p><br>

Si volvemos a la página principal al ser un blog donde los usuarios suben sus posts, si pulsamos en un post cualquiera podemos observar quien lo ha posteado y si pulsamos en el perfil de ese usuario, podemos ver en la URL su 
respectivo `ID user`. 

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/9.png" width="1000">
</p><br>

Cambiamos el user ID que tenemos en nuestro usuario logueado para cambiarlo por el `administrator` y ver si de esa forma podemos loguearnos con el usuario `admin`.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/10.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/11.png" width="1000">
</p><br>

Si enviamos la petición...
BINGO! hemos podido loguearnos y autenticarnos con el usuario `administrator` y nos aparece su API Key que es única para cada usuario. En este caso hemos conseguido lo que queríamos que era loguearnos mediante el user ID desde un usuario 
a otro. Pero lo que tenemos que hacer para completar el laboratorio es conseguir el userID y loguearnos con el usuario `Carlos`.


<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/12.png" width="1000">
</p><br>

Asi que vamos a repetir el proceso que hemos hecho anteriormente, vamos a buscar un post que haya publicado Carlos, si nos fijamos al pulsar en el `user Carlos` en la URL aparece su User ID directamente, así que vamos a copiarlo para poder
hacer uso de el en la petición de burpsuite.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/13.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/14.png" width="1000">
</p><br>

Volvemos a enviar la petición de login y cuando nos aparezca el User ID de nuestro usuario, vamos a cambiarlo por el de Carlos para ver si funciona y nos logueamos tal y como hemos hecho con el usuario `Administrator`.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/15.png" width="1000">
</p><br>

Listo, finalmente nos hemos logueado como `user Carlos` y la respuesta del laboratorio es la API Key de Carlos así que copiamos y pegamos en la respuesta al laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/16.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/17.png" width="1000">
</p><br>

Laboratorio resuelto.

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/18.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/user_id_controlled_by_request_parameter_with_unpredectible_user_id/19.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
