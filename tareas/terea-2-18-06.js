/*
Se necesita un script que solicite al usuario escribir una frase o 
texto y luego ingresar una palabra que quiera buscar. En cualquier caso
 (sea que encuentre la palabra o no) el programa debe devolver
  un mensaje informando el resultado (Usar emojis también).

Usar los métodos aprendidos en la clase para encontrar la solución.
*/
alert("🧐 Bienvenid@, a Encuentra la palabra");

let frase = prompt("✍️ Ingrese una frase o texto:");
let palabra = prompt("🔍 Ingrese la palabra que desea buscar:");

frase = frase.trim();
palabra = palabra.trim();

if (frase.toLowerCase().includes(palabra.toLowerCase())) {
    alert("✅ La palabra '" + palabra + "' fue encontrada con éxito.");
} else {
    alert("❌ La palabra '" + palabra + "' NO fue encontrada en el texto.");
}
/*
Crear un script que simule el juego de Adivina el número.
Primero se genera un número aleatorio entre 1 y 10 que el 
usuario no debe saber, Luego el usuario ingresa un número 
entre 1 y 10 tratando de adivinar. Devolver un mensaje si 
ganó o perdió.
*/
alert("🧐 Bienvenid@, hoy vamos a jugar a adivinar el número");

let numero = parseInt(prompt("Ingrese un número del 1 al 10"));
let numeroRandom = Math.floor(Math.random() * 10) + 1;

switch (numero) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        if (numero === numeroRandom) {
            alert("🎉 ¡Felicidades, acertaste!");
        } else {
            alert("❌ Casi, pero no. Será para la próxima, crack.\nEl número era: " + numeroRandom);
        }
        break;

    default:
        alert("⚠️ Número incorrecto. Debe ser un número del 1 al 10.");
        break;
}
/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. 
Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le 
ofrecerá vino blanco y si pide verdura se le ofrecerá agua.

Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

alert("☕🍽️ ¡Bienvenid@ a Rolling Coffee! 😊\nTe voy a sugerir la bebida perfecta para acompañar tu menú.");

let opcion = prompt(
  "🤔 ¿Qué menú deseas hoy?\n\n" +
  "1. 🥩🍲 Milanesita con Puré\n" +
  "2. 🐟🍟 Pescado con Papas Fritas\n" +
  "3. 🥬🥗 Verduritas"
);

switch (opcion) {
  case "1":
    alert("🥩🍲 ¡Muy buena elección! 😋\nTe aconsejo acompañarla con un 🍷 Vino Tinto.");
    break;

  case "2":
    alert("🐟🍟 ¡Excelente elección! 😍\nTe aconsejo acompañarla con un 🥂🍷 Vino Blanco.");
    break;

  case "3":
    alert("🥬🥗 ¿Estás a dieta? 💪😄\nEn ese caso, tu mejor opción es una 💧✨ Agua Gasificada.");
    break;

  default:
    alert("⚠️ Opción incorrecta.\nPor favor, ingresa un número del 1 al 3. 😊");
    break;
}

/*
Bueno esto lo hice yo aparete para los tipos de string
*/

alert("🧐Bienvenid@");

let frase = prompt("✍️ Ingrese una frase o texto:");

let opciones =prompt (
    "Seleccione una opción:\n" +
    "1 - Convertir texto a MAYÚSCULAS\n" +
    "2 - Convertir texto a minúsculas\n" +
    "3 - Mostrar cantidad de caracteres\n" +
    "4 - Mostrar primer carácter\n" +
    "5 - Mostrar los primeros 10 caracteres");


frase = frase.trim();



switch (opciones) {
  case "1" :
      alert("🔠 Texto en MAYÚSCULAS:\n" + frase.toUpperCase())
    break;

  case "2" :
      alert("🔠 Texto en minúsculas :\n" + frase.toLowerCase())
    break;

  case "3" :
      alert("📏 El texto tiene " + frase.length + " Caracteres")
    break;

  case "4" :
      alert("👉 El primer carácter es:" + frase.at(0))
    break;

  case "5" :
        alert("✂️ Primeros 10 caracteres: " + frase.substring(0,11))
    break;

  default:
    alert ("⚠️ Opción no válida.")
    break;
}