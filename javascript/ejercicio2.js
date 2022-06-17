//Escribir un programa que calcule el area de 3 figuras geométricas, tríangulo, réctangulo y circulo. En primer lugar pregunta de que figura se quiere calcular el áreal, después solicita los datos que necesitas calcularlo.
// TRIÁNGULO  - b*h/2
// RECTÁNGULO - b*h
// CIRCULO - π * r2 (pi * radio al cuadrado)
//Rombo   DMayor*dMenor/2
//Romboide   b*h 
//Trapecio   (B+b)h/2
//Pentágono   p*a/2  Perimetro es la suma de sus lados (n*5)
//Hexágono    p*a/2  Perimetro es la suma de sus lados (n*6)
//1) Escribe su respuesta
let figuras = prompt("Escribe la figura que deseas ejecutar: ")

//2) Separar las variables
let base;
let altura;
let radio;

switch(figuras){
    case "RECTANGULO":
    // case "rectangulo":
        //Pedir 02 cosas
        base = prompt ("¿Cúanto es la base?")
        altura = prompt ("¿Cúanto es la altura?")
        //Imprimir la respuesta
        console.log(`El area del rectángulo es ${base*altura}`)
        document.write(`El área el rectángulo es ${base*altura}`)
        break

    case "TRIANGULO":
    // case "triangulo":
        base = prompt("¿Cúanto es la base")
        altura = prompt ("¿Cúanto es la altura?")
        console.log(`El área del triángulo es ${base*altura/2}`)
        document.write(`El área del triángulo es ${base*altura/2}`)
        break

    case "CIRCULO":
        radio = prompt("¿Cúanto es el radio?")
        console.log(`El área del circulo es ${Math.PI* Math.pow(radio,2)}`)
        document.write(`El área del circulo es ${Math.PI* Math.pow(radio,2)}`)
        break
        case "ROMBO":
            DMayor = prompt("¿Cúanto es el Diagomal mayor?")
            dMenor = prompt("¿Cúanto es el diagonal menor")
            console.log(`El área de un rombo es ${DMayor*dMenor/2}`)
            document.write(`El área de un rombo es ${DMayor*dMenor/2}`)
        break
        case "ROMBOIDE":
            base = prompt("¿Cúanto es la base?")
            altura = prompt("¿Cúanto es la altura?")
            console.log(`El área de un romboide es ${base*altura}`)
            document.write(`El área de un romboide es ${base*altura}`)
        break
        case "TRAPECIO":
            BaseMayor = prompt("¿Cúanto es la Base mayor?")
            baseMenor = prompt("¿Cúanto es la base menor?")
            altura = prompt("¿Cúanto es la altura")
            suma = parseInt(BaseMayor)+parseFloat(baseMenor)
            console.log(`El área de un Trapecio es ${parseInt(BaseMayor)+parseFloat(baseMenor)*altura/2}`)
            document.write(`El área de un Trapecio es ${parseInt(BaseMayor)+parseFloat(baseMenor)*altura/2}`)
        break
        case "PENTAGONO":
            perimetro = prompt("¿Cúanto es el perimetro?")
            apotema = prompt("¿Cuánto es el apotema?")
            console.log(`El área de un Pentágono es ${perimetro*5*apotema/2}`)
            document.write(`El área de un Pentágono es ${perimetro*5*apotema/2}`)
        break
        case "HEXAGONO":
            perimetro = prompt("¿Cúanto es el perimetro?")
            apotema = prompt("¿Cuánto es el apotema?")
            console.log(`El área de un Hexágono es ${perimetro*6*apotema/2}`)
            document.write(`El área de un Hexágono es ${perimetro*6*apotema/2}`)
    
        default: console.log("Esta figura no existe");
}