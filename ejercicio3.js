/*
 * Ejercicio 3: Duplicar el contenido de los valores del arreglo
 *
 * e.g. [2, 3, 4] -> [4, 6, 8]
 *
 * Autor:
 * Fecha: 
 *
 */

 let arrayDoble = function(array, callback) {
  let suma = 0;
  for (i = 0; i < array.length; i++){
         array[i]  =  callback(array[i])  ;
       }
 return array ;
 };

 let array = [2, 3, 4];
 console.log(array)

 arrayDoble(array, (value) => {
   return value * 2 ;
 });

// Prueba (No modificar!)

if (array.length === 3 &&
    array[0] === 4 &&
    array[1] === 6 &&
    array[2] === 8) {
  console.log('Ejercicio 3 paso el test!');
} else {
  console.log('Ejercicio 3 no paso el test!');
  
}
$('#ejercicio3').click(function(){
  $('#resp13').html(array[0]);
  $('#resp23').html(array[1]);
  $('#resp33').html(array[2]);
});
