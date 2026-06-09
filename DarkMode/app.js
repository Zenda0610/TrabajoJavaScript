const btn = document.getElementById('toggle-btn');
const body = document.body;

// Al cargar la página, aplicar preferencia guardada
const modoGuardado = localStorage.getItem('modo');
if (modoGuardado === 'oscuro') {
  body.classList.add('oscuro');
}

// Escuchar clic en el botón
btn.addEventListener('click', () => {
  body.classList.toggle('oscuro');

  // Guardar preferencia en localStorage
  if (body.classList.contains('oscuro')) {
    localStorage.setItem('modo', 'oscuro');
  } else {
    localStorage.setItem('modo', 'claro');
  }
});
