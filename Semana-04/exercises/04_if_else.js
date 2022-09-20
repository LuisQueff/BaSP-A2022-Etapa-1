console.log('--Exercise 4: If Else')

/* A. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual 
que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. */
console.log('-Exercise 4.a')
var number = Math.random() * 1;
if (number >= 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
};

/* B. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta: */
console.log('-Exercise 4.b')
var Age = 26
if (Age < 2) {
    alert('Bebe');
} else if (Age >= 2, Age <= 12) {
    alert('Niño');
} else if (Age >= 13, Age <= 19) {
    alert('Adolecente');
} else if (Age >= 20, Age <= 30) {
    alert('Joven');
} else if (Age >= 31, Age <= 60) {
    alert('Adulto');
} else if (Age >= 61, Age <= 75) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
};