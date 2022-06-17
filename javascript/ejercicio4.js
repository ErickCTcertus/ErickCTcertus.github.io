/*
4 Solicitar al usuario una palabra y mostrar por la consola el número de consonantes, vocales y logitud de la palabra.
*/
//Se convierta en minúscula
const palabra = prompt("Escriba su palabra").toLocaleLowerCase()

let consonantes = 0
let vocales = 0

for(const i of palabra){
// Ponemos encaso de las vocales
    if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
    //Las vocales se contarán  en uno en uno
    vocales++
    else consonantes++
}
// console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tienes en total ${palabra.length} letras`)

document.write(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tienes en total ${palabra.length} letras`)