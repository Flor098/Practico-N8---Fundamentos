/*function invocarCallback(cb) {
    // Invoca al callback `cb`
    // Aqui tu codigo
    cb()
}*/

/*function sumarArray(numeros, cb) {
    var sum=0;
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    // Aqui tu codigo
    // for(i=0;i<numeros.length;i++){
    //sum+=numeros[i]
}  
    //cb(sum);
var resultado=numeros.reduce((previo,actual)=>previo+actual)
cb(resultado)
}*/


/*function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    // Aqui tu codigo
    //array.forEach(function(elemento){
       // console.log(elemento,indice)
   // })
    return array.forEach(elemento=>cb(elemento))
}  
*/


function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    // Aqui tu codigo
   var nuevo_arreglo=array.map(function(elemento){
    return cb(elemento)
   })
}
