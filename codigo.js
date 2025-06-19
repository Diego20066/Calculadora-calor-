const materiales = {
  aluminio: 900,
  agua: 4186,
  hierro: 449,
  cobre: 385,
  plomo: 128,
  oro: 129,
  plata: 235,
  mercurio: 139,
  vidrio: 840,
  aceite: 1970
};

function actualizarCalorEspecifico() {
  const elemento = document.getElementById("elemento").value;
  if (materiales[elemento]) {
    document.getElementById("calorEspecifico").value = materiales[elemento];
  } else {
    document.getElementById("calorEspecifico").value = "";
  }
}

function calcularCalor() {
  const masa = parseFloat(document.getElementById("masa").value);
  const c = parseFloat(document.getElementById("calorEspecifico").value);
  const deltaT = parseFloat(document.getElementById("deltaT").value);
  const elemento = document.getElementById("elemento").value;

  if (isNaN(masa) || isNaN(c) || isNaN(deltaT)) {
    document.getElementById("resultado").innerText = "Por favor, completa todos los campos correctamente.";
    return;
  }

  const Q = masa * c * deltaT;
  const nombreElemento = elemento ? ` del ${elemento.charAt(0).toUpperCase() + elemento.slice(1)}` : "";

  const mensaje = `El calor transferido es: ${Q.toFixed(2)} J (julios). 
  Esto se calculó usando la fórmula Q = m·c·ΔT, donde:
  m = ${masa} kg, 
  c = ${c} J/kg·°C, 
  ΔT = ${deltaT} °C.
  Este valor representa la cantidad de energía necesaria para calentar ${masa} kg${nombreElemento} en ${deltaT} grados Celsius.`;

  document.getElementById("resultado").innerText = mensaje;
}

