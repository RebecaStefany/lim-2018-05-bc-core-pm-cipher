# Cifrado César

## Introducción

Acontinuación vamos a realizar una app que nos permita Cifrar nuestros mensajes y 
descifrar los mensajes ocultos de manera sencilla y rápida, por tal se describe 
como se ha ido desarrollando nuestra app, analizando la problemática, la configuración, 
el diseño de flujo, la estructuración (HTML, JS y CSS), Testing y las herramientras 
que utilizamos para el desarrollo de esta app.

## Problemática a tratar

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

## Conociendo Sobre el método CIFRADO CESAR

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

## Objetivos

El objetivo de este proyecto, es entender la necesidad del usuario ante la 
problemática que se le presenta, llegando a dar como solución crear una app 
que cifre o descifre sus mensajes, de manera rápida y sencilla teniendo una 
grata experiencia con la app.

## Desarrollo del producto

### Entrevistas

Se realiza entrevistas para entender la necesidad del usuario, se concluye que 
la necesidad del usuario es ocultar sus mensajes por ende se realiza bosquejos 
de como sería nuestro producto final la cual interactuará con el usuario.


### Diseño del prototipo

Despues de indagar sobre la necesidad y las entrevistas del usuario, se diseña el 
prototipo y las interaciones que tendrá nuestra app.


### Prototipado para el usuario Final

Despues de entender y analizar la problemática del usuario, se realiza el prototipado 
de nuestra app para el usuario Final.


### Configuración para nuestra app

Para el desarrollo de la app propuesta al usuario, se requiere las siguientes herramientas:

* Visual Basic Code o Atom
* Laptop