/*
 Ejercicio 3: Calculadora básica
Solicita al usuario dos números decimales.  
Convierte las entradas. 
Pide al usuario que ingrese el tipo de operación: suma, resta, multiplicación o división.  
Usa condicionales para ejecutar la operación correspondiente.  
Muestra el resultado en la consola.  
Si la operación no es válida, informa al usuario con un mensaje en la consola.
 */

let primerNumero = prompt("Ingresar cualquier numero");
let segundoNumero = prompt("Ingresar cualquier numero");


let numero1 = parseFloat(primerNumero);
let numero2 = parseFloat(segundoNumero);

let calculo = prompt("ingresar el tipo de Operacion suma resta división o multiplicación + - / *");

if (calculo === "+" || calculo === "suma" ) {
    console.log (`La suma es ${numero1+numero2}`)
}
else if (calculo=== "-" || calculo === "resta") {
    console.log (`La resta es ${numero1-numero2}`)
}
else if (calculo=== "/" || calculo === "división") {
    console.log (`La división es ${numero1/numero2}`)
}
else if (calculo=== "*" || calculo === "multiplicación") {
    console.log (`La multiplicación es ${numero1*numero2}`)
}
else {
    console.log ("Por favor ingrese los valores correspondientes")
}



/*
Ejercicio 2: Calcular promedio de notas
Pide al usuario tres notas con decimales.  
Convierte las entradas a números decimales.
Calcula el promedio de las tres notas usando operadores aritméticos.  
Muestra el promedio en la consola.  
Usa un condicional para indicar si el promedio es suficiente para aprobar (ejemplo: mayor o igual a 6). 
*/



let nota1 = prompt("Ingresa la primera nota con decimal");
let nota2 = prompt("Ingresa la segunda nota con decimal");
let nota3 = prompt("Ingresa la tercera nota con decimal");

let numero1 = parseFloat(nota1);
let numero2 = parseFloat(nota2);
let numero3 = parseFloat(nota3);

let promedio = (numero1 + numero2 + numero3)/3

if (promedio >= 6) {
    console.log (`Aprobaste Felicitaciones tu nota es ${promedio.toFixed(2)}`)
}
else if (promedio < 6) {
console.log (`Desaprobaste Burro tu nota es ${promedio.toFixed(2)}`)
}
else{
    console.log ("Por Favor ingrese una Nota Correcta")
}



/*
Ejercicio 1: Comparar números enteros
Solicita al usuario dos números enteros.  
Convierte las entradas a números enteros.  
Determina cuál de los dos números es mayor, o si son iguales.  
Muestra el resultado en la consola.
*/

let entrada1 = prompt("Ingresar primer numero entero");
let entrada2 = prompt("Ingresar segundo numero entero");

let numero1 = parseInt(entrada1);
let numero2 = parseInt(entrada2);


if (numero1 > numero2) {
    console.log(`El primer numero ${numero1} es mayor que el segundo numero ${numero2}`);
} 
else if (numero2 > numero1) {
    console.log(`El segundo numero ${numero2} es mayor que el primer numero ${numero1}`);
}
else if (numero1 === numero2) {
    console.log ("Los dos numeros son iguales Wiii")
} 
else {
    console.log("Por favor ingrese numeros enteros correctos");
}



/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%
*/


let cliente = prompt("ingrese el monto de su compra")


let dolares=parseFloat(cliente)

if (dolares <= "100") {
    console.log ("usted no tiene ningun descuento por su compra")
}

else if (dolares >= "100.1" && dolares <= "300") {
    console.log (`Felicitaciones usted tiene un descuento del 5% su descuento es de $${(dolares*0.05).toFixed(2)} dolares su compra quedaria en $${dolares-(dolares*0.05).toFixed(2)}`)
}

else if (dolares >= "300.1" && dolares <= "500") {
    console.log (`Felicitaciones usted tiene un descuento del 10% su descuento es de $${(dolares*0.10).toFixed(2)} dolares su compra quedaria en $${dolares-(dolares*0.10).toFixed(2)}`)
}

else if (dolares >= "500.1") {
    console.log (`Felicitaciones usted tiene un descuento del 15% su descuento es de $${(dolares*0.15).toFixed(2)} dolares su compra quedaria en $${dolares-(dolares*0.15).toFixed(2)}`)
}
else {
    console.log ("Por favor ingrese un numero correcto")
}