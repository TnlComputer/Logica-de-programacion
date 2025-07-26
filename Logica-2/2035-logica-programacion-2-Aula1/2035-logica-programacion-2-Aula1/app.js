let titulo = document.querySelector("h1");
titulo.innerHTML = "¡Hola, Mundo!";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";

document.querySelector("h1").textContent = "Juego del número secreto";


function intentoDeUsuario() {
  alert("click en el boton");
  // let numero = document.querySelector("input").value;
  // let numeroSecreto = 5; // Número secreto para el juego

  // if (numero == numeroSecreto) {
  //     alert("¡Felicidades! Has adivinado el número secreto.");
  // } else if (numero < numeroSecreto) {
  //     alert("El número secreto es mayor. Inténtalo de nuevo.");
  // } else {
  //     alert("El número secreto es menor. Inténtalo de nuevo.");
  // }
}