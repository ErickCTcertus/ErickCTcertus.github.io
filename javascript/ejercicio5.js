/*
5) Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dento deñ array o no
*/

const pintura = ["azul", "amarillo", "rojo", "verde", "rosa","cafe","ginda","violeta"]

const color = prompt("Escriba un color").toLocaleLowerCase()

if (pintura.indexOf(color) !== -1){
    console.log("Tu color si está en stock")
    document.write("Tu color si está en stock")
}else{
    console.log("Tu color no tenemos a la venta")
    document.write("Tu color no tenemos a la venta")
}
