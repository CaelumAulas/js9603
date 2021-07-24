import { excluirCartoesStore } from "./db.js";

let usuarioLogado = localStorage.getItem('CEEP_USUARIO_LOGADO');

while(!isEmail(usuarioLogado))
{
    usuarioLogado = prompt('Por favor, informe um nome de usuário válido:');
    localStorage.setItem('CEEP_USUARIO_LOGADO', usuarioLogado);
}

function isEmail(email)
{
    const validadorEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    return validadorEmail.test(email);
}

export async function logout()
{
    await excluirCartoesStore();
    localStorage.removeItem('CEEP_USUARIO_LOGADO');
    window.location.reload();
}

export default usuarioLogado;