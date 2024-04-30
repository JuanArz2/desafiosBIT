"use strict";

/* Variables */
const $empleados = document.getElementById("empleados");
const $boton = document.getElementById("boton");
const $imgAleatoria = document.getElementById("imgAleatoria");

/* Funciones */
async function llamarJson() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const empleados = await respuesta.json();
    console.log(empleados);
    let html = "";
    for (const empleado of empleados) {
      // 1raPalabra:Usable, 2da:deDondeSale
      html += `
<tr>
  <th scope="row">${empleado.id}</th>
  <td>${empleado.name}</td>
  <td>${empleado.email}</td>
  <td>${empleado.phone}</td>
  <td>${empleado.address.city}</td>
  <td>${empleado.address.suite}</td>
  <td>${empleado.company.name}</td>
</tr>
      `;
    }
    $empleados.innerHTML = html;
  } catch (error) {
    console.log("Error Generado");
  }
}

async function generarAleatoriaPato() {
  try {
    const apiPato = await fetch("https://random-d.uk/api/v2/random");
    const imgPato = await apiPato.json();
    let htmlPato = "";
    htmlPato += `<img src="${imgPato.url}" alt="img de un pato aleatoria" />`;
    $imgAleatoria.innerHTML = htmlPato;
  } catch (error) {
    console.log("Hubo Error");
  }
}

$boton.addEventListener("click", () => {
  generarAleatoriaPato();
});

/* Llamado */
llamarJson();
