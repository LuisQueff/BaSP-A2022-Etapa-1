console.log('--Exercise 2: Strings');

/* A. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
números en una 3er variable*/
console.log('-Exercise 2.a');
var stg1 = 'asdfghjklñ';
console.log(stg1.toUpperCase());

/* B. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.b');
var stg2 = 'zxcvbnmkjh';
var stg3 = stg2.substring(0, 5);
console.log(stg3);

/* C. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.c');
var stg4 = 'qwertyuiop';
var stg5 = stg4.substring(7, 10);
console.log(stg5);

/* D. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable*/
console.log('-Exercise 2.d');
var stg6 = 'qawsedrftg';
var stg7 = stg6.substring(0, 1).toUpperCase() + stg6.substring(1, 10).toLowerCase();
console.log(stg7);

/* E. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable*/
console.log('-Exercise 2.e');
var stg8 = 'abcdef ghijkl';
var stg9 = stg8.indexOf(' ');
console.log(stg9);

/* F. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula*/
console.log('-Exercise 2.f');
var stg10 = 'paralelepipedo esternocleidomastoideo';
var i = stg10.indexOf(' ');
var stg11 = stg10.substring(0, 1).toUpperCase() + stg10.substring(1, i).toLowerCase();
var stg12 = stg10.substring(i + 1, i + 2).toUpperCase() + stg10.substring(i + 2, stg10.length).toLowerCase();
var stg13 = stg11 + ' ' + stg12;
console.log(stg13);