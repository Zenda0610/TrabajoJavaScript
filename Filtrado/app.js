// Referencias
const lista = document.getElementById('lista-tareas');
const frutas = lista.getElementsByTagName('li');
const buscador = document.getElementById('buscador');

// Filtrar dinámicamente
buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();

  for (let fruta of frutas) {
    const nombre = fruta.textContent.toLowerCase();
    fruta.style.display = nombre.includes(texto) ? '' : 'none';
  }
});
