const inputSegundos = document.getElementById('segundos');
const btnIniciar = document.getElementById('iniciar-btn');
const contador = document.getElementById('contador');

let intervalo; // referencia al setInterval

btnIniciar.addEventListener('click', () => {
  // limpiar intervalos previos
  clearInterval(intervalo);

  let tiempo = parseInt(inputSegundos.value);

  if (isNaN(tiempo) || tiempo <= 0) {
    contador.textContent = "Ingresa un número válido";
    return;
  }

  contador.textContent = tiempo + " segundos restantes";

  intervalo = setInterval(() => {
    tiempo--;

    if (tiempo > 0) {
      contador.textContent = tiempo + " segundos restantes";
    } else {
      clearInterval(intervalo);
      contador.textContent = "¡Tiempo cumplido!";
      contador.classList.add('alerta');
    }
  }, 1000);
});
