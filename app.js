// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Declaramos el array vacío para almacenar los nombres
let amigos = [];

// 2. Agregamos un amigo a la lista
function agregarAmigo() {
    // Obtenemos un valor de entrada
    let nombreAmigo = document.getElementById('amigo').value;

    // Si el campo no está vacío, se agrega el nombre en el array de amigos
    amigos.push(nombreAmigo);

    // Limpiamos el campo de texto para nuevos ingresos
    document.getElementById('amigo').value = "";

    // Se actualiza la lista de amigos en la página
    mostrarListaAmigos();
}

// 3. Mostramos la lista de amigos en la página
function mostrarListaAmigos() {
    // Mostramos la lista en el HTML
    let lista = document.getElementById('listaAmigos');

    // Limpiamos la lista antes de mostrarla
    lista.innerHTML = "";

    // Iteramos sobre el array de amigos y se agrega cada nombre como un <li> en la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
