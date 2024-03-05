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
