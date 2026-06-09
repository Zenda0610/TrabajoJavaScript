// Array de objetos simulando usuarios
const usuarios = [
  { nombre: "Ana López", rol: "Diseñadora", bio: "Apasionada por el diseño gráfico y la ilustración digital." },
  { nombre: "Carlos Pérez", rol: "Desarrollador", bio: "Fan del código limpio y las aplicaciones web interactivas." },
  { nombre: "María Gómez", rol: "Marketing", bio: "Creativa en campañas digitales y redes sociales." },
  { nombre: "Luis Torres", rol: "Administrador", bio: "Organizado y enfocado en la gestión de proyectos." },
  { nombre: "Sofía Ramírez", rol: "Estudiante", bio: "Aprendiendo programación y diseño UX/UI." }
];

// Referencia al contenedor
const contenedor = document.getElementById('contenedor-usuarios');

// Crear dinámicamente las tarjetas
usuarios.forEach(usuario => {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('usuario-card');

  tarjeta.innerHTML = `
    <h2>${usuario.nombre}</h2>
    <h3>${usuario.rol}</h3>
    <p>${usuario.bio}</p>
  `;

  contenedor.appendChild(tarjeta);
});
