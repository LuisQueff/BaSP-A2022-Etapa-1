console.log('--Exercise 3: Arrays');

/* A. Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los month 5 y 11 */
console.log('-Exercise 3.a');
var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(month [4] + ' ' + month[10]);

/* B. Ordenar el array de month alfabéticamente y mostrarlo por consola */
console.log('-Exercise 3.b');
console.log(month.sort());

/* C. Agregar un elemento al principio y al final del array */
console.log('-Exercise 3.c');
month.unshift('preEnero');
month.push('postDiciembre');
console.log(month);

/* D. Quitar un elemento del principio y del final del array */
console.log('-Exercise 3.d');
month.shift();
month.pop();
console.log(month);

/* E. Invertir el orden del array */
console.log('-Execise 3.e');
month.reverse();
console.log(month);

/* F. Unir todos los elementos del array en un único string donde cada mes este separado por un guión */
console.log('-Exercise 3.f');
console.log(month.join('-'));

/* G. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre */
console.log('-Execise 3.g')
month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var month2 = month.slice(4, 11);
console.log(month2);