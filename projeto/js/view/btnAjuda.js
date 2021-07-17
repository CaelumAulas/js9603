import { adicionarCartao } from "./mural.js";

const btn = document.querySelector('#btnAjuda');
btn.addEventListener( 'click', function() {
    const mensagens = [
        'Bem-vindo ao CEEP!',
        'Clique no botão "?" para Ajuda',
        'Clique no botão "Linhas" para mudar a exibição dos cartões'
    ];

    for (let msg of mensagens) {
        adicionarCartao(msg);
    }

} );
