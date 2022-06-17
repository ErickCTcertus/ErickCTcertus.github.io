//juegos de preguntas que salgan al azar y nos de una calificación al final
//Array bidimensional donde se guardarán laas preguntas junto a sus respuestas correctas correspondientes...
let lista = [
    ['¿Cuánto es 3^3?',"27"],
    ['¿Qué color resulta al mezclar el azul con el amarillo?',"verde"],
    ['¿Cuántos jugadores participan en un partido de fútbol?',"22"],
    ['¿Quién fue el primer Inca?',"Manco Cápac"],
    ['¿A qué héroe peruano le llaman el Brujo de los Andes?',"Andrés Avelino Cáceres."],
    ['¿Cuántos Suyos son?',"4"],
    ['¿Cuál es el lugar más frío de la tierra?',"la Antartida"],
    ['¿Cuál es el río más largo del mundo?',"El rio Amanzonas"],
    ['¿Cuántas Maravillas son?',"7"],
    ['¿Cuál es el océano más grande?',"El Océano Pacífico"]
]
//Crear variables que usaré 
let pregunta, respuesta
let formuladas = 0 //Cuantas preguntas plantearás 
let acertadas = 0 //respuestas acertadas

hazpregunta();

//Creamos el evento a trávez del ID
document.getElementById("boton").addEventListener("click",function(){
    //Obtener el dato 
    let entrada = document.getElementById("respuesta").value
    
    if(entrada == respuesta){//Decimos cuántas acertó
        acertadas++
    }
    if(formuladas < 10){//Escribo cuántas preguntas le haré
        hazpregunta() //método que crearé aparte, para realizar una acción
    }
    else{
        muestraresultado() //Frase si acertó o no, muestra resultado
    }
})
function hazpregunta(){
    let e //Variable interna
    // se extrae una pregunta/respuesta al azar array...
    e = lista.splice(numAlet(0,lista.length-1),1);
    // se guardan la pregunta y la respuesta
    pregunta = e[0][0];
    respuesta = e[0][1];

    //se muestra la pregunta
    document.getElementById("pregunta").innerHTML=pregunta;
    //se borra lo escrito anteriormente por el usuario
    document.getElementById("respuesta").value="";
    //contar las preguntas realizadas
    formuladas++
}

//Devuelve un número aletorio entre 'min' y ' max' (ambos inclusive)
function numAlet(max,min){
    return Math.floor( Math.random() * (max - min +1) ) +min;
}

//Comprueba el número de preguntas acertadas y muestra mensaje en función de este
function muestraresultado(){
    let resultado;  //Variable auxiliar

    switch (acertadas){
        case 0:
            resultado="Estás bajo en Cultura General, a leer"
            break
        case 1:
            resultado="Vas bien, pero no te falta"
            break
        case 2:
            resultado="Uf casi ganas"
            break
        case 3:
            resultado="Excelente, juega el valor de la verdad"
            break
    }
    document.getElementById("salida").innerHTML=resultado
}