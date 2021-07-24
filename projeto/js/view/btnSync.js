import { salvarCartoesServidor } from "../services/CeepService.js";
import { excluirCartoesStore, salvarCartoesStore } from "../storage/db.js";
import { getCartoes } from "./mural.js";
import { notificar } from "./notificacao.js";

const btnSync = document.querySelector('#btnSync');

btnSync.addEventListener('click', async function() {
    btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');
    btnSync.disabled = true;
    let mensagem = '';
    const listaCartoesMural = getCartoes();

    try 
    {
        mensagem = await salvarCartoesServidor(listaCartoesMural);
        await excluirCartoesStore();
    }
    catch(e)
    {
        mensagem = await salvarCartoesStore(listaCartoesMural);
    }

    notificar(mensagem);
    btnSync.disabled = false;
    btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado');
});

export function sincronizar()
{
    if (confirm('Gostaria de carregar os dados do servidor?')) {
        window.location.reload();
    }
    else if (confirm('Gostaria de salvar a versão atual do mural?')) {
        btnSync.click();
    }
}