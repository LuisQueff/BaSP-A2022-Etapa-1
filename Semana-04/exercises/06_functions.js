console.log('--Exercise 6: Functions');

/* A. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
console.log('-Exercise 6.a');
function suma(number1, number2) {
    return number1 + number2;
};
var result = suma(5, 8);
console.log(result);

/* B. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es 
un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
resultado */
console.log('-Exercise 6.b');
function suma(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        alert('ERROR, one of the values is not a number');
        return NaN;
    } else {
        return number1 + number2;
    }
      
};
var result2 = suma('g', 752);

/* C. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */
console.log('-Exercise 6.c');
function validateInteger(number) {
    if (Number.isInteger(number)) {
        return true
    } else {
        return false
    }
};
 var result3 = validateInteger(7.5);
 var result4 = validateInteger(8);
 console.log(result3);
 console.log(result4);

/*  D. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero */
console.log('-Exercise 6.d');
function suma(number1, number2) {
    if (isNaN(number1) || isNaN(number2)) {
        alert('ERROR, one of the values is not a number');
        return NaN;
    } else if (!validateInteger(number1)) {
        alert('ERROR, the number  is not integer');
        return Math.round(number1);
    } else if (!validateInteger(number2)) {
        alert('ERROR, the number  is not integer');
        return Math.round(number2);
    } else {
        return number1 + number2;
    }
};
    var result5 = suma(11.5, 5);
    console.log(result5);
    var result6 = suma(10, 8.8);
    console.log(result6);

    /* E. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
    que todo siga funcionando igual. */
    console.log('-Exercise 6.e')
    function validateIntegers(number1, number2) {
        if (!validateInteger(number1)) {
            alert('ERROR, the number  is not integer');
            return Math.round(number1);
        } else if (!validateInteger(number2)) {
            alert('ERROR, the number  is not integer');
            return Math.round(number2);
        } else {
            return number1 + number2;
        }
    };
    function suma(number1, number2) {
        if (isNaN(number1) || isNaN(number2)) {
            alert('ERROR, one of the values is not a number');
            return NaN;
        } else if (validateIntegers(number1, number2)) {
            return validateIntegers(number1, number2);
        } else {
            return number1 + number2;
        }   
    };
    var result7 = suma('t', 5);
    console.log(result7);
    var result8 = suma(5.8, 7);
    console.log(result8);
    var result9 = suma(2, 2);
    console.log(result9);