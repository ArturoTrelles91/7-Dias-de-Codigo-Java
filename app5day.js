// Definimos las categorías como arrays vacíos
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];

// Función para preguntar y agregar productos a la lista
function agregarAlimento() {
  let respuesta = prompt("¿Deseas agregar un alimento a tu lista de compras? (si/no)");

  if (respuesta === "si") {
    // Preguntamos el nombre del alimento
    let alimento = prompt("¿Qué alimento deseas agregar?");
    
    // Preguntamos la categoría del alimento
    let categoria = prompt("¿En qué categoría encaja? (frutas, lacteos, congelados, dulces)");

    // Según la categoría, agregamos el alimento al array correspondiente
    if (categoria === "frutas") {
      frutas.push(alimento);
    } else if (categoria  === "lacteos") {
      lacteos.push(alimento);
    } else if (categoria  === "congelados") {
      congelados.push(alimento);
    } else if (categoria  === "dulces") {
      dulces.push(alimento);
    } else {
      alert("Categoría no válida. No se ha agregado el alimento.");
    }

    // Llamamos a la función nuevamente para seguir agregando alimentos
    agregarAlimento();
  } else {
    // Mostramos la lista final de compras por categorías
    console.log("Lista de compras:");

    if (frutas.length > 0) {
      console.log("Frutas: " + frutas.join(", "));
    } else {
      console.log("Frutas: ");
    }

    if (lacteos.length > 0) {
      console.log("Lacteos: " + lacteos.join(", "));
    } else {
      console.log("Lacteos: ");
    }

    if (congelados.length > 0) {
      console.log("Congelados: " + congelados.join(", "));
    } else {
      console.log("Congelados: ");
    }

    if (dulces.length > 0) {
      console.log("Dulces: " + dulces.join(", "));
    } else {
      console.log("Dulces: ");
    }
  }
}

// Iniciamos el proceso
agregarAlimento();