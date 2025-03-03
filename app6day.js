// Definimos las categorías como arrays vacíos
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];

// Función para preguntar y agregar productos a la lista
function agregarAlimento() {
  let respuesta = prompt("¿Deseas agregar, eliminar un alimento o finalizar la lista? (agregar/eliminar/no)");

  if (respuesta === "agregar") {
    // Preguntamos el nombre del alimento
    let alimento = prompt("¿Qué alimento deseas agregar?");
    
    // Preguntamos la categoría del alimento
    let categoria = prompt("¿En qué categoría encaja? (frutas, lacteos, congelados, dulces)");

    // Según la categoría, agregamos el alimento al array correspondiente
    if (categoria === "frutas") {
      frutas.push(alimento);
    } else if (categoria === "lacteos") {
      lacteos.push(alimento);
    } else if (categoria === "congelados") {
      congelados.push(alimento);
    } else if (categoria === "dulces") {
      dulces.push(alimento);
    } else {
      alert("Categoría no válida. No se ha agregado el alimento.");
    }

    // Llamamos a la función nuevamente para seguir agregando alimentos
    agregarAlimento();

  } else if (respuesta === "eliminar") {
    // Opción para eliminar un alimento
    let categoriaEliminar = prompt("¿De qué categoría deseas eliminar un alimento? (frutas, lacteos, congelados, dulces)");

    if (categoriaEliminar === "frutas" || categoriaEliminar === "lacteos" || categoriaEliminar === "congelados" || categoriaEliminar === "dulces") {
      let listaSeleccionada = eval(categoriaEliminar); // Seleccionamos la lista correspondiente
      if (listaSeleccionada.length > 0) {
        // Mostrar los elementos en la categoría seleccionada
        let eliminarComida = prompt(`Lista de ${categoriaEliminar} actuales: ${listaSeleccionada.join(", ")}. ¿Qué comida deseas eliminar?`);
        let index = listaSeleccionada.indexOf(eliminarComida); // Buscamos el índice del alimento a eliminar
        if (index !== -1) {
          listaSeleccionada.splice(index, 1); // Elimina el elemento
          alert(`${eliminarComida} ha sido eliminado de la lista de ${categoriaEliminar}.`);
        } else {
          alert("¡No fue posible encontrar el alimento en la lista!");
        }
      } else {
        alert(`No hay alimentos en la categoría de ${categoriaEliminar} para eliminar.`);
      }
    } else {
      alert("Categoría no válida.");
    }

    // Llamamos a la función nuevamente para seguir agregando o eliminando
    agregarAlimento();

  } else if (respuesta === "no") {
    // Mostrar la lista final de compras por categorías
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

  } else {
    alert("Opción no válida. Por favor, responde con 'agregar', 'eliminar' o 'no'.");
    agregarAlimento();  // Si la respuesta no es válida, volver a preguntar
  }
}

// Iniciamos el proceso
agregarAlimento();