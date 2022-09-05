var store = [{
        "title": "DOM XSS in document.write sink using source location.search – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio: “DOM XSS in document.write sink using source location.search”: Cuando abrimos el lab, lo primero que nos encontramos es la siguiente web: Hay una barra de búsqueda, por lo que vamos a probar a simplemente buscar algo: Cuando hacemos la búsqueda, si...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/dom-xss-document.write-sink/",
        "teaser":null},{
        "title": "DOM XSS in jQuery anchor href attribute sink using location.search source – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio: “DOM XSS in jQuery anchor href attribute sink using location.search source”: En este caso, para resolver el laboratorio tenemos que ejecutar un alert que nos devuelva las cookies. Lo primero de todo es acceder al laboratorio: Una vez accedidos, nos dirigimos...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/dom-xss-jquery-href-attribute-sink-using-location/",
        "teaser":null},{
        "title": "DOM XSS in jQuery selector sink using a hashchange event – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio: “DOM XSS in jQuery selector sink using a hashchange event”: Para resolver el laboratorio, tenemos que enviar a una víctima un exploit que aproveche la vulnerabilidad del laboratorio para ejecutar la función print(). Lo primero de todo es acceder al laboratorio:...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/dom-xss-jquery-selector-sink-hashchange-event/",
        "teaser":null},{
        "title": "DOM XSS in innerHTML sink using source location.search – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio: “DOM XSS in innerHTML sink using source location.search”: Lo primero de todo como siempre es acceder al laboratorio: Una vez accedido, vemos una barra de búsqueda. Por lo que vamos a buscar cualquier cosa: Si nos fijamos, lo que hemos buscado...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/dom-xss-sink-using-location-search/",
        "teaser":null},{
        "title": "Reflected XSS into HTML context with nothing encoded – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected XSS into HTML context with nothing encoded.” Para resolver el laboratorio tenemos que realizar un Cross-site-Scripting (XSS) que llame a una función alert. Cuando entramos en el laboratorio, vemos un campo de búsqueda: Vamos a probar a buscar...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/reflected-xss-into-html/",
        "teaser":null},{
        "title": "Stored XSS into HTML context with nothing encoded – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Stored XSS into HTML context with nothing encoded.” Para resolver el laboratorio tenemos que realizar un Cross-site-Scripting (XSS) que llame a una función alert en un comentario de una publicación. Cuando entramos en el laboratorio lo primero que tenemos...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/stored-xss-into-html/",
        "teaser":null},{
        "title": "Username enumeration via subtly different responses – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “ Username enumeration via subtly different responses.” Descripción del laboratorio Pasos Enumerar nombre de usuario Como de costumbre, el primer paso es analizar la funcionalidad del laboratorio, en este caso, la funcionalidad de inicio de sesión, e intentar iniciar...","categories": ["Portswigger","Authentication","Practitioner"],
        "tags": ["Burpsuite","Login","Fuerza bruta","Enumeración"],
        "url": "http://localhost:4000/username-enumeration-subtly-different-responses/",
        "teaser":null},{
        "title": "Username enumeration via different responses – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Username enumeration via different responses.” Pasos Al iniciar el laboratorio, vaya a la página de inicio de sesión e ingrese cualquier nombre de usuario y contraseña para probar la página de inicio de sesión. En este caso, ingresé Nombre...","categories": ["Portswigger","Authentication","Apprentice"],
        "tags": ["Burpsuite","Login","Fuerza bruta","Enumeración"],
        "url": "http://localhost:4000/username-enumeration-via-different-responses/",
        "teaser":null},{
        "title": "Password reset broken logic – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Password reset broken logic.” Descripción del laboratorio Pasos Analizar Como de costumbre, el primer paso es analizar la funcionalidad del laboratorio, en este caso, la funcionalidad de reinicio. Para esto, restablezca la contraseña para wiener. La solicitud de la...","categories": ["Portswigger","Authentication","Apprentice"],
        "tags": ["Burpsuite","Login","Fuerza bruta","Enumeración"],
        "url": "http://localhost:4000/password-reset-broken-logic/",
        "teaser":null},{
        "title": "2FA simple bypass – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “2FA simple bypass.” Descripción del laboratorio Pasos Iniciar sesión como “wiener” Como de costumbre, abro la aplicación e inicio sesión con la cuenta wiener. En la parte superior de la pantalla hay un botón Email client. Cuando me piden...","categories": ["Portswigger","Authentication","Apprentice"],
        "tags": ["Burpsuite","Login","Fuerza bruta","Bypass"],
        "url": "http://localhost:4000/simple-bypass/",
        "teaser":null},{
        "title": "Reflected XSS into a JavaScript string with angle brackets HTML encoded – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected XSS into a JavaScript string with angle brackets HTML encoded.” En este caso, para resolver el reto tenemos que inyectar un payload que escape del string donde se encuentra y llame a la función alert. Lo primero de...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/reflected-xss-javascript-string-angle-brackets/",
        "teaser":null},{
        "title": "SQL injection vulnerability allowing login bypass – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “SQL injection vulnerability allowing login bypass.” Pasos Dirígete a la página de inicio de sesión. Cuando ingresamos un nombre de usuario y contraseña, la cadena de consulta se verá así: ❯ SELECT * FROM users WHERE username = ‘administrator’...","categories": ["Portswigger","SQL Injection","Apprentice"],
        "tags": ["SQL"],
        "url": "http://localhost:4000/sql-injection-vulnerability-allowing-login-bypass/",
        "teaser":null},{
        "title": "SQL Injection vulnerability in WHERE clause allowing retrieval of hidden data – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “SQL Injection vulnerability in WHERE clause allowing retrieval of hidden data.” Pasos Primero, hagamos clic en una categoría. Después de hacer clic en la categoría de regalos corporativos, la URL muestra: ❯ https://ac321f581f89aa2e808a3eb200d10094.web-security-academy.net/filter?category=Corporate+gifts Observe las palabras en negrita, que...","categories": ["Portswigger","SQL Injection","Apprentice"],
        "tags": ["SQLi"],
        "url": "http://localhost:4000/sql-injection-vulnerability-clause-hidden-data/",
        "teaser":null},{
        "title": "Stored XSS into anchor href attribute with double quotes HTML-encoded – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Stored XSS into anchor href attribute with double quotes HTML-encoded.” En este caso, para resolver el laboratorio tenemos que escribir un comentario que llame a la función alert cuando se haga click en el nombre del autor del comentario....","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/stored-xss-into-anchor-attribute-double-quotes-html-encoded/",
        "teaser":null},{
        "title": "Reflected DOM XSS – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected DOM XSS.” En este caso se nos indica que el servidor procesa los datos de una petición y lo muestra los datos de la respuesta. Posteriormente, un script de la página procesa los datos reflejados de una forma...","categories": ["Portswigger","XSS","Practitioner"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/reflected-dom-xss/",
        "teaser":null},{
        "title": "Stored DOM XSS – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Stored DOM XSS.” En este caso, el enunciado nos dice que existe una vulnerabilidad de XSS del tipo DOM almacenado en la funcionalidad de comentario del blog. Para resolver el laboratorio debemos de explotar la vulnerabilidad y ejecutar la...","categories": ["Portswigger","XSS","Practitioner"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/stored-dom-xss/",
        "teaser":null},{
        "title": "DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded.” En este caso, se nos indica que la web usa Angular, y que, además, existe un DOM based XSS en la funcionalidad de búsqueda. Para completar el...","categories": ["Portswigger","XSS","Practitioner"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/dom-xss-angular-expression-angle-brackets-and-double-quotes-html/",
        "teaser":null},{
        "title": "DOM XSS in document.write sink using source location.search inside a select element – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “DOM XSS in document.write sink using source location.search inside a select element.” En este caso, para resolver el reto tenemos que escaparnos del elemento “select” y llamar a la función alert. Lo primero de todo es acceder al laboratorio:...","categories": ["Portswigger","XSS","Practitioner"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/dom-xss-documentwrite-sink-using-location-search-inside-select-element/",
        "teaser":null},{
        "title": "Reflected XSS into attribute with angle brackets HTML-encoded – PortSwigger Write Up",
        "excerpt":"En este post vamos a estar resolviendo el laboratorio de PortSwigger: “Reflected XSS into attribute with angle brackets HTML-encoded.” En este caso, para resolver el reto tenemos que inyectar un atributo que nos ejecute un alert. Lo primero de todo es acceder al laboratorio: Una vez accedemos, nos encontramos ante...","categories": ["Portswigger","XSS","Apprentice"],
        "tags": ["Burpsuite","JavaScript","XSS"],
        "url": "http://localhost:4000/reflected-xss-into-attribute-angle-brackets-html-encoded/",
        "teaser":null}]
