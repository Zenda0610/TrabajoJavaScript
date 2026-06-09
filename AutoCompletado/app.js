// Array simulando base de datos local
const paises = [
  "Colombia", "Argentina", "México", "Chile", "Perú",
  "Brasil", "Uruguay", "España", "Francia", "Italia",
  "Alemania", "Japón", "China", "Canadá", "Estados Unidos"
];

const buscador = document.getElementById('buscador');
const sugerencias = document.getElementById('sugerencias');

// Evento de teclado: filtrar mientras se escribe
buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  sugerencias.innerHTML = ""; // limpiar lista

  if (texto.length > 0) {
    const resultados = paises.filter(pais =>
      pais.toLowerCase().includes(texto)
    );

    resultados.forEach(pais => {
      const li = document.createElement('li');
      li.textContent = pais;
      sugerencias.appendChild(li);
    });
  }
});

// Evento de clic en sugerencias
sugerencias.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    buscador.value = e.target.textContent; // pasar texto al input
    sugerencias.innerHTML = ""; // limpiar lista
  }
});
