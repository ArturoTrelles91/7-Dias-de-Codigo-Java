// Bienvenida a la aventura
alert("¡Bienvenido a la aventura en programación!");

// Pregunta inicial: elegir área
//let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?: Responde 1 para front y 2 para back");
let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?: Responde 1 para front y 2 para back");


//if (area.toLowerCase() === "front-end") {

if(area == "1"){
  // Opciones para Front-End
  let frontOpcion = prompt("¡Genial! Ahora, ¿quieres aprender React o Vue?: Responde 3 para React y 4 para Vue");
  if (frontOpcion === "3") {
    alert("¡Excelente elección! React es muy popular y versátil.");
  } else if (frontOpcion === "4") {
    alert("¡Muy bien! Vue es fácil de aprender y muy amigable.");
  } else {
    alert("No elegiste una opción válida, pero lo importante es seguir explorando.");
  }
} else if (area == "2") {
  // Opciones para Back-End
  let backOpcion = prompt("¡Perfecto! ¿Quieres aprender C# es 5 o Java es 6?");
  if (backOpcion === "5") {
    alert("¡Excelente! C# es muy potente para aplicaciones empresariales.");
  } else if (backOpcion === "6") {
    alert("¡Muy buena elección! Java es robusto y ampliamente usado.");
  } else {
    alert("No elegiste una opción válida, pero lo importante es seguir aprendiendo.");
  }
} else {
  alert("No elegiste un área válida, pero siempre es buen momento para aprender.");
}

// Elección de especialización o fullstack
let desarrollo = prompt("Indica si deseas especializarte en el área elegida o convertirte en Fullstack (escribe 'especializarme' o 'fullstack'): Responde 7 para especializar y 8 para fullstack");
if (desarrollo === "7") {
  alert("¡Genial! Profundizar en un área te permitirá dominarla.");
} else if (desarrollo === "8") {
  alert("¡Perfecto! Ser Fullstack te dará un conocimiento integral del desarrollo web.");
} else {
  alert("No elegiste una opción válida, pero lo importante es seguir avanzando en tu aprendizaje.");
}

// Preguntar por tecnologías adicionales utilizando un bucle
let continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Responde 'ok' para continuar)");
while (continuar.toLowerCase() === "ok") {
  let tecnologia = prompt("Ingresa el nombre de la tecnología:");
  alert(`¡${tecnologia} es una gran elección!`);
  continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Responde 'ok' para continuar)");
}

alert("¡Gracias por participar en esta aventura de aprendizaje!");