/* 
3 - Solicita un número par e impar desde 
1 hasta ese número con el mensaje "es par" o "es impar"
    si el numero es 5 el resultado será:
        1 - es impar
        2 - es par 
        3 - es impar
        4 - es par
        5 - es impar
*/
// Creanos la variable
let numero = parseInt( prompt("Escriba su número"))

//Creamos el bucle
// for (inicio - final  -  conteo)
for(let i=1; i<=numero; i++){
    //Comprobamos si es par Si lo dividimos entre 2 residuo es 0
    //El operador módulo (% ) calcula el resto de un operación de divición
    if(i%2 == 0){
        //console.log(`El número ${1} es par `)
        document.write(`El número ${i} es par <brs>`)
    }  else{
        //console.log(`El número ${1} es impar `)
        document.write(`El número ${i} es impar <brs>`)
    }
}