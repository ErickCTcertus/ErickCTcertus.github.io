//Crearemos un saludo interactivo pidiendo sus datos y mostrandolo en la pantalla

//Seleccionar el botón que produsca un evento (ID)
//Añadir un controlador de eventos
document.getElementById("boton").addEventListener("click",function(){
    //Extraer los datos del usuario, declarando variables
    //Para obtener el dato usamos propiedades value
    let nom = document.getElementById("nombre").value
    let tel = document.getElementById("teléfono").value
    //Mostrar el resultado en la pantalla
    document.getElementById("salida").innerHTML=" Hola " + nom + " te has hecho acrededor de un vale de 10 soles en consumo y te llamaremos al número " + tel + " para decirte cómo podrás recoger tu premio. "
})