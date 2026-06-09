// Referencias
const miniaturas = document.getElementById('miniaturas');
const imagenPrincipal = document.getElementById('imagen-principal');

// Delegación de eventos: escuchar clics en el contenedor padre
miniaturas.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    imagenPrincipal.src = e.target.src; // Cambiar la imagen principal
    imagenPrincipal.alt = e.target.alt;
  }
});
