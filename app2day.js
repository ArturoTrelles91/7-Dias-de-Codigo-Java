let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert("Hola " + nombre + ", tienes " + edad + " años y ya estás aprendiendo " + lenguaje + "!");

// Se pregunta si le gusta estudiar el lenguaje
let respuesta = prompt("¿Te gusta estudiar " + lenguaje + "? Responde con el número 1 para SÍ o 2 para NO");

// Se evalúa la respuesta y se muestra el mensaje correspondiente
if (respuesta === "1") {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (respuesta === "2") {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
  alert("Respuesta no válida, por favor ingresa 1 o 2.");
}

