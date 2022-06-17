/* Solicita un nombre, la edad y muestra por consola el mensaje "hola____,tienes___años___ y el año que viene tendrás___años"*/

//1) Creamos la Variable (let)
//El metodo PROMT -->Sirve la introdución info.
let nombre = prompt ("Escribe tu nombre: ")
let edad = parseInt( prompt ("Escribe tu edad: ") )

//Imprimir en la prueba (consola)
//Backticks --> acento grave ``
//Template String
console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad+1} años`)

document.write("Tu respuesta es: \n")
document.write(`Hola, ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad+1} años`)
