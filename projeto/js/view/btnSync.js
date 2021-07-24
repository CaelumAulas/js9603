import { salvarCartoesServidor } from "../services/CeepService.js";
import { getCartoes } from "./mural.js";
import { notificar } from "./notificacao.js";

const btnSync = document.querySelector('#btnSync');

btnSync.addEventListener('click', async function() {
    btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');
    btnSync.disabled = true;

    const listaCartoesMural = getCartoes();
    let mensagem = await salvarCartoesServidor(listaCartoesMural);
    notificar(mensagem);

    btnSync.disabled = false;
    btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
});