const numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
//let intento = "";
let intento;
let acerto = false;

for(let contador = 1; contador <= 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroSecreto){
        alert("¡Felicidades, acertaste! El número era ${numeroAdivinacion}.");
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert("Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!");
}