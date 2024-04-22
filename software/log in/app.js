// Selección del botón para iniciar sesión y del botón para registrarse
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

// Selección del contenedor principal
const container = document.querySelector(".container");

// Agregar un evento de clic al botón de registrarse
sign_up_btn.addEventListener('click', () =>{
    // Agregar la clase "sign-up-mode" al contenedor para cambiar el modo a registro
    container.classList.add("sign-up-mode");
});

// Agregar un evento de clic al botón de iniciar sesión
sign_in_btn.addEventListener('click', () =>{
    // Eliminar la clase "sign-up-mode" del contenedor para cambiar el modo a inicio de sesión
    container.classList.remove("sign-up-mode");
});
