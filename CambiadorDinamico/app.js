const colores = document.getElementById("btn");

colores.addEventListener("click", () => {
   setInterval(() => {
      const color1 = Math.floor(Math.random() * 256);
      const color2 = Math.floor(Math.random() * 256);
      const color3 = Math.floor(Math.random() * 256);
      document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
   }, 100); 
});

