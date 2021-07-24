import { adicionarCartao } from "./mural.js";
import { getInstrucoes } from "../services/CeepService.js";

const btn = document.querySelector('#btnAjuda');
btn.addEventListener( 'click', async function() {
    const mensagens = await getInstrucoes();
    for (let msg of mensagens) {
        adicionarCartao(msg.conteudo, msg.cor);
    }
} );
