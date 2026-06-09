const password = document.getElementById('Password');

password.addEventListener("input",()=>{
    if (password.value.length < 8) {
        password.setCustomValidity("La contraseña debe tener al menos 8 caracteres.");
        password.style.borderColor = "red";
    } else {
        password.setCustomValidity("Contraseña valida");
        password.style.borderColor = "green";
    }
});