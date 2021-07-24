import { logout } from "../storage/loginUsuario.js";

const btnLogout = document.querySelector('#btnLogout');
btnLogout.addEventListener('click', () => {
    logout();
});