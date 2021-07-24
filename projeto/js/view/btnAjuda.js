import { adicionarCartao } from "./mural.js";

const btn = document.querySelector('#btnAjuda');
btn.addEventListener( 'click', async function() {
    const resposta = await fetch('http://wd47-ceep.herokuapp.com/get-instrucoes.php');
    const dadosCarregados = await resposta.json();
    const mensagens = dadosCarregados.instrucoes;

    for (let msg of mensagens) {
        adicionarCartao(msg.conteudo, msg.cor);
    }

} );
