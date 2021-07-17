import { notificar } from "./notificacao.js";
import { adicionarCartao } from "./mural.js";

const formulario = document.querySelector('form');
const caixaTexto = formulario.querySelector('textarea');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if (caixaTexto.value.trim() === '') {
        notificar('Por favor, preencha o campo corretamente!');
    }
    else {
        let conteudoCartao = caixaTexto.value.trim();
        adicionarCartao(conteudoCartao);
        formulario.reset();
    }
});
