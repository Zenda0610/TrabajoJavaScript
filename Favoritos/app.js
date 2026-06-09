const lista = document.getElementById('lista-productos');

// Recuperar favoritos guardados
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Aplicar estilo a los que ya son favoritos
favoritos.forEach(id => {
  const item = lista.querySelector(`li[data-id="${id}"]`);
  if (item) {
    item.classList.add('favorito');
    item.querySelector('.btn-fav').textContent = 'Favorito ✅';
  }
});

// Delegación de eventos
lista.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-fav')) {
    const li = e.target.closest('li');
    const id = li.getAttribute('data-id');

    if (favoritos.includes(id)) {
      // Quitar de favoritos
      favoritos = favoritos.filter(fav => fav !== id);
      li.classList.remove('favorito');
      e.target.textContent = 'Añadir a Favoritos';
    } else {
      // Añadir a favoritos
      favoritos.push(id);
      li.classList.add('favorito');
      e.target.textContent = 'Favorito ✅';
    }

    // Guardar en localStorage
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
});
