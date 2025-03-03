alert("¡Bienvenido a la aventura en programación!");

let continuar = true; // Variable para controlar el ciclo

// Bucle que pregunta si el usuario quiere realizar otra operación
while (continuar) {
    // Pregunta al usuario qué operación desea realizar
    let tipoOperacion = prompt("¿Qué tipo de operación quieres realizar?: suma, resta, multiplicacion, division");

    // Funciones matemáticas
    function sumar(...numeros) {
        return numeros.length ? numeros.reduce((acc, num) => acc + num, 0) : 0;
    }

    function restar(...numeros) {
        return numeros.length ? numeros.reduce((acc, num) => acc - num) : 0;
    }

    function multiplicar(...numeros) {
        return numeros.length ? numeros.reduce((acc, num) => acc * num, 1) : 0;
    }

    function dividir(...numeros) {
        if (numeros.length === 0) return 0; 
        if (numeros.includes(0)) return "Error: No se puede dividir entre 0"; 
        return numeros.reduce((acc, num) => acc / num);
    }

    // Solicita números al usuario y los convierte a un array de números
    let arga = prompt("Introduce los números separados por comas:");
    let numeros = arga.split(",").map(num => parseFloat(num)); // Convertir strings a números

    let resultado;

    if (tipoOperacion.toLowerCase() === "suma") {
        resultado = sumar(...numeros);
    } else if (tipoOperacion.toLowerCase() === "resta") {
        resultado = restar(...numeros);
    } else if (tipoOperacion.toLowerCase() === "multiplicacion") {
        resultado = multiplicar(...numeros);
    } else if (tipoOperacion.toLowerCase() === "division") {
        resultado = dividir(...numeros);
    } else {
        resultado = "Operación no válida";
    }

    // Muestra el resultado
    alert(`El resultado de la ${tipoOperacion} es: ${resultado}`);
    console.log(`El resultado de la ${tipoOperacion} es: ${resultado}`);

    // Pregunta si quiere realizar una nueva operación
    continuar = prompt("¿Quieres realizar una nueva operación? (si/no)").toLowerCase() === "si";
}

alert("¡Gracias por usar la calculadora!"); // Despedida al terminar