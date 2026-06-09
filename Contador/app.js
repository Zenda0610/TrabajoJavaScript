const contador = document.getElementById('contador');
const btnIncrementar = document.getElementById('btn-incrementar');
const btnDecrementar = document.getElementById('btn-decrementar');
const btnResetear = document.getElementById('btn-resetear');

let valor = 0;

btnIncrementar.addEventListener('click', () => {
  valor++;
  contador.textContent = valor;
});

btnDecrementar.addEventListener('click', () => {
  valor--;
  contador.textContent = valor;
});

btnResetear.addEventListener('click', () => {
  valor = 0;
  contador.textContent = valor;
});