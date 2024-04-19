"use strict";

/* const nombreUsuario = prompt("Ingrese su Nombre")
console.log(nombreUsuario) */

/* var nombreUsuario = prompt('Nombre de Usuario')
switch(hola){
    case nombreUsuario = true:
        document.write("¡Hola, " + nombreUsuario + "!")
        break;
    case nombreUsuario = false:
        console.log("¡Hola tú!")
        break;
} */

/* const perfil = "profesor";
switch (perfil) {
  case "estudiante":
    console.log("eres un estudiante");
    break;
  case "profesor":
    console.log("eres un profesor");
    break;
  default:
    console.log("perfil no permitido");
    break;
} */

//

/*//FALTA ERRORES // 1) Hacer un programa que reciba el nombre y apellido y lo muestre completo
const nombre = prompt("Su Nombre");
const apellido = prompt("Su Apellido");
console.log(nombre + " " + apellido);
console.log(isNaN(nombre) + " " + isNaN(apellido)); //Por qué con.log da True?
document.write(`!Buen día ${nombre} ${apellido}, `);
*/

/*//FALTA ERRORES // Hacer un programa que reciba dos # del usuario y los sume
const numero1 = +prompt("Dame un número"); //porque va a cambiar de String a #
const numero2 = parseInt(prompt("Dame otro"));
const numero3 = Number(prompt("Y un último"));

console.log(numero1 + " , " + numero2 + " , " + numero3);
console.log(numero1 + numero2 + numero3);
document.write(`${numero1 + numero2 + numero3} saludos para usted!`); 
*/

/*//FALTA ERRORES // 2) Hacer un programa que reciba del usuario un # y muestre si es 0, si no que muestre si es positivo o si es negativo.
const numeroUsuario = Number(prompt(`!Dame un número!`));
console.log(numeroUsuario);
const numero0 = 0;

if (numeroUsuario === 0) {
  document.write(`Tu número es igual a cero, ${numeroUsuario} = 0`);
} else if (numeroUsuario <= numero0) {
  document.write(`Tu número es menor que cero, ${numeroUsuario} < 0`);
} else {
  document.write(`Tu número es mayor que cero, ${numeroUsuario} > 0`);
}
*/

/* //CheckErrores// Hacer un programa que reciba del usuario dos # y muestre cuál es el mayor y cuál el menor. (con solución de errores)
const numeroUsuario1 = Number(prompt(`Dame un número`));
const numeroUsuario2 = Number(prompt(`Ahora dame otro`));
console.log(`${numeroUsuario1} y ${numeroUsuario2}`);
console.log(typeof numeroUsuario1 + typeof numeroUsuario2);

if (isNaN(numeroUsuario1) || isNaN(numeroUsuario2)) {
  document.write(`Ay, no me diste únicamente números, vuelve a hacerlo...`);
} else {
  if (numeroUsuario1 > numeroUsuario2) {
    document.write(
      `Este es el mayor '${numeroUsuario1}' y este el menor '${numeroUsuario2}'.`
    );
  } else if (numeroUsuario1 < numeroUsuario2) {
    document.write(
      `Este es el mayor '${numeroUsuario2}' y este el menor '${numeroUsuario1}'.`
    );
  } else if (numeroUsuario1 === numeroUsuario2) {
    document.write("Upps, ¡son iguales!");
  }
}
*/

/*//FALTA ERRORES // Hacer un programa que pida al usuario un # entero y muestre todos los números desde el 1 hasta el suyo. 
const numero = Number(prompt("Dame un Número"));
for (let i = 1; i <= numero; i++) {
  document.write(i);
}
*/

// Hacer un programa que pregunte al usuario si desea continuar, en caso de SÍ repetir pregunta, en caso de NO despedirse con un "Chao!"
/* let confirmacion = "";
do {
  confirmacion = prompt("¿Desea Continuar?");
} while (
  confirmacion === "si" ||
  confirmacion === "sí" ||
  confirmacion === "SI" ||
  confirmacion === "SÍ" ||
  confirmacion === "sI" ||
  confirmacion === "sÍ"
);
document.write(" Chao!");
*/
/* let confirmacion = null;
do {
  confirmacion = confirm("¿Desea Continuar?");
} while (confirmacion);
document.write("Chao!");
*/

// Mostrar los días de la semana
/* let semana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
for (let i = 0; i < semana.length; i++) {
  document.write(semana[i] + " ");
}
*/

// Pida un # y muestre los números pares desde 1 hasta el # ingresado
/* const ingresado = parseInt(prompt("Dame un número y te devolveré sus pares"));

for (let i = 1; i <= ingresado; i++) {
  if (i % 2 === 0) {
    document.write(i + " ");
  }
}
*/

/* FALTAAA // Recibir un # de 0 a 6 unicamente y retornar el día - semana correspondiente.
const semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

// Solicitar un día de la semana y retornar el nombre de ese día en Inglés.
*/

/* //Saluar por nombre, si no hay decir 'Hola, desconocido', en una función

const aaa = 0;
function saludo(nombre, apellido) {
  if (
    nombre == undefined ||
    nombre === " " ||
    apellido == undefined ||
    apellido === " "
  ) {
    document.write("Hola desconocido");
  } else {
    document.write("Hola " + nombre + " " + apellido + "!");
  }
}
const nombreUsuario = prompt("Dame tu nombre");
const apellidoUsuario = prompt("Dame tu apellido");

saludo(nombreUsuario, apellidoUsuario);
*/

// Botón para sumar y btn para restar, mostrar resultado
const d = document;
// Linkeo el div del body
const $root = d.getElementById("root");

// Creo las constantes de cada elemento en JS según su Etiqueta <X>
const $h1 = d.createElement("h1");
const $p = d.createElement("p");
const $btnSuma = d.createElement("button");
const $btnResta = d.createElement("button");
let contadorDeClicks = 0;

// Creo el elemento en el viewPort
$root.appendChild($h1);
$root.appendChild($p);
$root.appendChild($btnSuma);
$root.appendChild($btnResta);

// Dar estilos -css
$root.style.backgroundColor = "#0f0";

// Le doy contenido a cada elemento creado
$h1.textContent = "Manipulación del DOM";
$p.textContent = contadorDeClicks;
$btnSuma.textContent = "+";
$btnResta.textContent = "-";

// Funcionalidad botones
$btnSuma.addEventListener("click", () => {
  contadorDeClicks++;
  $p.textContent = contadorDeClicks;
  if (contadorDeClicks === 3) {
    $h1.style.display = "none"; // Ocultar en 3 -css
  }
  if (contadorDeClicks === 5) {
    $h1.style.display = ""; // Mostrar en 5 -css
  }
  if (contadorDeClicks === 7) {
    $h1.remove(); // Eliminar en 7 -js
  }
});

$btnResta.addEventListener("click", () => {
  contadorDeClicks--;
  $p.textContent = contadorDeClicks;
  if (contadorDeClicks === 2) {
    $h1.style.display = ""; // Mostrar en 2 -css
  }
});
