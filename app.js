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