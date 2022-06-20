const carruseljs = document.querySelector(".carrusel")

let maxScrollLeft = carruseljs.scrollWidth - carruseljs.clientWidth
let intervalo = null
let step = 1

const start = () =>{
    //Tiempo que se ejecutará
    intervalo = setInterval(function(){
        //Avanzará según a los pasos izq
        carruseljs.scrollLeft = carruseljs.scrollLeft + step
        //si llega a terminar regresará hacia atrás
        //igualdad estricta === / Similares ==
        if(carruseljs.scrollLeft === maxScrollLeft) {
            step = step *-1
        }
        else if(carruseljs.scrollLeft === 0) {
            step = step *-1
        }
    },75
    )
}

//Detener la acción del movimiento 
const stop = () =>{
    clearInterval(intervalo)
}

//Eventos que se darán con el mause
carruseljs.addEventListener("mauseover", () =>{
    stop();
})

carruseljs.addEventListener("mauseover", () =>{
    start();
})

start();

