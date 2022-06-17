//Crearemos un juego de números al azar donde debemos elegir
//Colocar los números al azar
let num = Math.ceil(Math.random()*15)

//Manejador de Eventos
document.getElementById("boton").addEventListener("click",
function(){
    //obtener la información
    let dato = document.getElementById("numero").value
    //Mostrar la respuesta de acuerdo a la condición

    if(num == dato){
        alert("FELICITACIONES, te has ganado un gran premio")
        //Recarga la información 
        location.reload()
    }
    else{
        alert("Lo siento el número era " + num + " si deseas puedes volver a jugar ")
        location.reload()
    }
})