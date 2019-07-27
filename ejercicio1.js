/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor:
 * Fecha: 
 *
 */
 
let arraySum = function(array) {
      let suma = 0;
 for (i = 0; i < array.length; i++){
        suma = suma + array[i];
      }
return suma;
};

// Prueba (No modificar)

const a = [7, 6, 5, 4, 3];
const b = [-3, -4, -5, -6, -7];
const c = [33];

console.log(arraySum(a))
console.log(arraySum(b))
console.log(arraySum(c))

if (arraySum(a) === 25 &&
    arraySum(b) === -25 &&
    arraySum(c) === 33) {
  console.log('Ejercicio 1 paso la prueba!');
} else {
  console.log('Ejercicio 1 no paso la prueba!');
}

$('#ejercicio1').click(function(){
$('#resp1').html(arraySum(a));
$('#resp2').html(arraySum(b));
$('#resp3').html(arraySum(c));
});