console.log(Array);

var arrayVacio = [];
console.log(arrayVacio); 


var numeros = [5, 10, 15, 20];
console.log(numeros);

var elementosVariados = [1, "Hola", true, 2, { nombre: "Objeto" }];
console.log(elementosVariados);

var miArray = new Array(1, "dos", 3.14, false);

console.log(miArray);


var secuenciaNumerica = Array.from({ length: 5 }, (_, index) => index + 1);

console.log(secuenciaNumerica);


var cadenaDeTexto = "Hola, cómo, estás";
var arrayDePalabras = cadenaDeTexto.split(", ");

console.log(arrayDePalabras);


var array1 = [1, 2, 3];
var array2 = ["a", "b", "c"];

var arrayCombinado = [...array1, ...array2];

console.log(arrayCombinado);


var arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
var arraySinDuplicados = [...new Set(arrayConDuplicados)];

console.log(arraySinDuplicados);

function generarArray(longitud) {
    var nuevoArray = [];
  
    for (var i = 1; i <= longitud; i++) {
      nuevoArray.push(i * 2); // En este ejemplo, se generan números pares
    }
  
    return nuevoArray;
}
  
  var arrayGenerado = generarArray(5);
  console.log(arrayGenerado);
  



  var nombres = ["Juan", "María", "Pedro", "Ana", "Carlos"];
  var longitudNombres = nombres.length;
  
  console.log("La longitud del array de nombres es: " + longitudNombres);
  


  const miPez = ["angel", "payaso", "nemo", "globo"];
  const cont  = miPez.pop();
  console.log(miPez);
  console.log(cont);
  
 
 
 
 
 
  let myArray = [3, 4, 5];

  
  myArray.unshift(1, 2);
  
  console.log(myArray);
  
  
  let myArray = [1, 2, 3, 4, 5];

  
  let primerElemento = myArray.shift();
  
  console.log(primerElemento); 
  console.log(myArray); 
  

  let myArray = [1, 2, 3, 4, 5];


let subArray = myArray.slice(1, 4);

console.log(subArray); 
console.log(myArray); 



let myArray = [1, 2, 3, 4, 5];

let myString = myArray.join(",");

console.log(myString);




