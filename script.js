
function calcularSnacks() {
  let edadActual = Number(document.getElementById("edadActual").value);
  let edadMaxima = Number(document.getElementById("edadMaxima").value);
  let snack = document.getElementById("snack").value;
  let snacksDia = Number(document.getElementById("snacksDia").value);
  let precio = Number(document.getElementById("precio").value);

  if (edadActual <= 0 || edadMaxima <= edadActual || snack.trim() === "" || snacksDia <= 0 || precio <= 0) {
    alert("Por favor, completá todos los campos correctamente.");
    return;
  }

  let cantidadFinal = (edadMaxima - edadActual) * 365 * snacksDia;
  let gastoTotal = cantidadFinal * precio;

  document.getElementById("resultadoSnacks").innerHTML =
    "Necesitarás " + cantidadFinal + " de " + snack +
    " para que te alcancen hasta los " + edadMaxima + " años." +
    "<br><br>Gastarás un total de $" + gastoTotal.toLocaleString("es-AR") + ".";
}

function calcularViaje() {
  let dias = Number(document.getElementById("dias").value);
  let presupuesto = Number(document.getElementById("presupuesto").value);
  let comidasDia = Number(document.getElementById("comidasDia").value);

  if (dias <= 0 || presupuesto <= 0 || comidasDia <= 0) {
    alert("Por favor, completá todos los campos correctamente.");
    return;
  }

  let comidasTotales = dias * comidasDia;
  let dineroPorComida = presupuesto / comidasTotales;

  document.getElementById("resultadoViaje").innerHTML =
    "Podés gastar $" + dineroPorComida.toLocaleString("es-AR", {
      maximumFractionDigits: 2
    }) + " en cada comida para que te alcance la plata durante los " +
    dias + " días de viaje.";
}
