// 1. Crear un array para almacenar los nombres
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        input.value = ""; // Limpiar el campo de entrada
        mostrarListaAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido o el amigo ya está en la lista.");
    }
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// 4. Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos amigos para realizar el sorteo.");
        return;
    }

    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpiar resultados anteriores

    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoAleatorio}`;
    resultadoList.appendChild(li);
}
