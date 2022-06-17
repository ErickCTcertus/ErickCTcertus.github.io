//Cargar el evento en una ventana
// => es una función alternativa
window.addEventListener("load",() =>{
    //Busco los botones y el resultado
    const botones = document.getElementsByClassName("boton")
    /*usar querySelector para que nos de el elemento solo */
    const result = document.querySelector(".resultado")

    /*Convierte el HTMLCollection a Array para poder integrar*/
    const botonlista = Array.from(botones)

    /*Agrego un evento de click a cada boton */
    //forEach ---> una simple interacción en su lugar
    botonlista.forEach((boton) =>{
        boton.addEventListener("click", () =>{
            calculadora(boton, result)
        })
    })
})
/* Llamo a una función cada vez que ocurra un click*/
function calculadora(boton,result){
    switch (boton.innerHTML) {
        case "C":
            //Se borrará todos los números
            borrar(result)
            break;

        case "=":
            //Se calculará la formula 
            calcular(result)
            break;

        default:
            //Funcionará con los botones y el resultado 
            actualizar(result,boton)
            break;
    }
}
function calcular(result){
    // Evalua un código JS representando como una cadena de carácteres 
    result.innerHTML = eval(result.innerHTML)
}
function borrar(result){
    if(result.innerHTML !=0){
        result.innerHTML = 0
    }
}
function actualizar(result,boton){
    if(result.innerHTML == 0){
        result.innerHTML = " "
    }
    result.innerHTML += boton.innerHTML
}
