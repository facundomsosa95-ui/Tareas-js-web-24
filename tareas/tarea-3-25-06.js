/* Simulador de "Carrito de Descuentos Progresivos" (Ciclo while)
Contexto: Muchas tiendas online aplican descuentos que dependen de la cantidad de productos en el carrito.

Consigna: El usuario comienza con un producto. El programa debe preguntar el precio de cada producto y sumarlo. 
El ciclo while continuará pidiendo productos mientras el usuario escriba "si" para agregar otro. Si el total supera 
los $5000, el sistema debe imprimir: "¡Has obtenido un 10% de descuento!".

Desafío lógico: Debes llevar un control del total acumulado en cada iteración
 y aplicar el descuento solo una vez al final, antes de imprimir el resultado. */




function carritoDescuentos() {
    alert("🛒 Bienvenido a MercadoRolling");

    const META = 5000;
    let total = 0;

    while (true) {
        let cancelar = prompt("💵 Ingresá el precio del producto:");

        if (cancelar === null) break;

        let producto = Number(cancelar);

        if (isNaN(producto) || producto < 0) {
            alert("❌ Por favor ingresá un valor correcto.");
            continue;
        }

        total += producto;

        let siNo = prompt(
            "¿Tenés más productos? 🛍️\n\n" +
            "1. Sí\n" +
            "2. No"
        );

        if (siNo === "1") {
            alert(`💪 ¡Vas por buen camino! Tu compra hasta ahora es $${total} 🛒`);
        } else if (siNo === "2") {
            break;
        } else {
            alert("⚠️ Opción inválida, intentá de nuevo.");
        }
    }

    if (total > META) {
        alert(
            `🎉 ¡Superaste el total de $${META}! Obtuviste un 10% de descuento 🏷️\n` +
            `Tu total final es $${(total * 0.9).toFixed(2)} 💰`
        );
    } else {
        alert(
            `Tu total es $${total}\n\n` +
            `.🧾 ¿Sabias que? Si tu compra supera los $${META} tienes un descuento del 10% 💰\n` +
            `¡Seguí comprando para la próxima! 😊`
        );
    }
}


/* El Simulador de "Token de Seguridad" (Ciclo while)
Contexto: Hoy en día, los sistemas de seguridad nos piden
 ingresar un código que caduca en segundos o nos limita la cantidad de intentos.

Consigna: Crea un programa que simule un sistema de autenticación de 2 pasos.
 El sistema tiene un código fijo (ej: 5555). El usuario tiene un máximo de 3 
 intentos para ingresarlo correctamente.

Desafío lógico: Usa un contador que aumente con cada intento fallido y un while 
que verifique dos condiciones: que el código sea incorrecto y que los intentos sean menores a 3. */

function verificacionDosPasos () {


alert("👋 ¡Buenos días, jefe! Ingrese su contraseña. 🔒\n\nRecuerde que tiene 3 intentos.");

let intentos = 3;
let password = "123456789";

while (intentos > 0) {

    let userPassword = prompt("🔑 Ingrese su contraseña:");


    if (userPassword === password) {

        alert("✅ ¡Contraseña correcta!\n🎉 Bienvenido, jefe.");
        break;
    }

    intentos--;

    if (intentos > 0) {
        alert("❌ Contraseña incorrecta.\n⚠️ Le quedan " + intentos + " intento(s).");
    } else {
        alert("🚫 Se agotaron sus intentos.\n🔄 Por favor, actualice la página e inténtelo nuevamente.");
    }
}
}


/* El "Triángulo de Asteriscos" (Ciclo for anidado)
Consigna: Utiliza dos bucles for (uno dentro de otro)
 para imprimir un triángulo de asteriscos en la consola con una altura de 5 líneas: */

function piramide () {

for (let i = 1; i <= 5; i++) {
    
    let piramide = "";

    for (let j = 0; j < i; j++) {
        
        piramide += "*";
    }
    console.log (piramide)
}
}



/*Gestor de "Horas de Estudio" (Ciclo for)
Contexto: Los estudiantes suelen organizar su semana para cumplir con el curso Fullstack.

Consigna: Crea un programa donde el usuario ingrese cuántas horas dedicará a estudiar cada
 día de la semana (7 días). El programa debe usar un ciclo for para solicitar el dato 7 veces,
  ir sumando las horas en un acumulador y, al final, mostrar el promedio de horas diarias dedicadas al estudio.

Desafío lógico: ¿Qué pasa si el usuario ingresa un valor negativo?
 El programa debe ignorar ese dato y pedir que ingrese un número mayor a 0. */

function horasDeEstudio () {

alert("👋 ¡Bienvenido al curso Full Stack de RollingCode! 💻🚀");

let dias = 7;
let total = 0;

for (let i = 0; i < dias; i++) {

    let horas = parseInt(
        prompt(`📅 Día ${i + 1} de ${dias}\n\n⏰ ¿Cuántas horas desea estudiar hoy?`)
    );

    if (isNaN(horas) || horas < 0) {
        alert("❌ Dato inválido.\n⚠️ Por favor, ingrese una cantidad de horas válida.");
        i--;
        continue;
    }

    total += horas;
}

alert(
    "📚 ¡Resumen de la semana! 🎉\n\n" +
    `✅ Total de horas estudiadas: ${total} hs\n` +
    `📊 Promedio diario: ${(total / dias).toFixed(2)} hs`
);
}


/*
1. El Acumulador de "Dinero con Tope" (Ciclo while)
Consigna: Imagina que quieres ahorrar para un objetivo de $1000.
 El programa debe pedir al usuario que ingrese montos de ahorro 
 diarios (en un prompt o variable) y los vaya sumando. El ciclo 
 while debe ejecutarse mientras la suma total sea menor a $1000. 
 Al llegar o superar el objetivo, imprime "¡Objetivo alcanzado!".

Desafío lógico: ¿Qué pasa si el usuario ingresa un número negativo? 
Añade una validación para que no sume montos inválidos.

Objetivo: Manejo de acumuladores con condiciones de salida basadas en metas. 
*/
function objetivoCompra() {

 alert("Hola soy tu asistente virtual que controlara tus ahorros");
let meta = prompt("¿Para qué estás ahorrando?");

let objetivo = Number (prompt("🎯 ¿Cuál es el objetivo de ahorro que deseás?"));

let ahorro = 0;

while (ahorro < objetivo) {
    let cancelar = prompt("💵 Ingresá el monto diario:");

    if (cancelar === null) break;
    
        let montoDiario = Number(cancelar);

    if (isNaN(montoDiario) || montoDiario <= 0) {
        alert("❌ No podés ingresar montos negativos o letras. Intentá de nuevo.");
        continue;
    }

    ahorro += montoDiario;

    if (ahorro < objetivo) {
        alert(`✅ ¡Bien, vas por buen camino! 💪\nTus ahorros ahora son 💰 $${ahorro}\nTe faltan $${objetivo - ahorro} para alcanzar la meta 🎯`);
    }

    else {
         alert(`🎉 ¡Felicidades! ¡Ahora podés comprar tu ${meta}! \nTenés ahorrado 💰 $${ahorro}`);
    }
}
}