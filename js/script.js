console.log("¡Bienvenido a CoderHouse Basket +30");
console.log("¡Vamos a cargar el equipo!");
console.log("Recuerda:");
console.log("- No puede haber más de 12 jugadores");
console.log("- No deben tener menos de 30 años");
console.log("- Tiene que haber un mínimo de 5 jugadores.");

let cantidadJugadores = 0
let sumaEdades = 0

function deseaContinuar (cantidadJugadores){
    if (cantidadJugadores >= 5){
        selector = prompt("¿Desea agregar otro jugador? S/N");
        return selector.toUpperCase() === "S"
    }else{
        return true
    }
}

do {
    let edad = parseInt(prompt("Ingrese la Edad del Jugador: " + (cantidadJugadores + 1)));
    if (edad >= 30){
        sumaEdades = sumaEdades + edad;
        cantidadJugadores ++;
        console.log("La edad del jugador " + cantidadJugadores + " es: " + edad);
    }else{
        console.log("El jugador es menor de 30 años y no puede jugar");
    }
} while (cantidadJugadores <= 12 && deseaContinuar(cantidadJugadores));

let promedioEdad = sumaEdades/cantidadJugadores
console.log("El promedio de edad del equipo es: ", promedioEdad);