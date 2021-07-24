import { getCartoesServidor } from "../services/CeepService.js";

const mural = document.querySelector('.mural');
const cartaoModelo = document.querySelector('#template-cartao').content.firstElementChild;
let numeroCartao = 0;

window.addEventListener('load', async function() {
    const cartoes = await getCartoesServidor();
    for (let cartao of cartoes) {
        adicionarCartao(cartao.conteudo, cartao.cor);
    }
});

/**
 * Adiciona um novo cartão no mural
 * @param {string} conteudo     Texto do cartão que será criado
 * @param {string} cor          Cor que será atribuída ao cartão
 * @return {void}
 */
export function adicionarCartao(conteudo, cor = '')
{
    numeroCartao++;
    const cartao = cartaoModelo.cloneNode(true);
    cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo);
    cartao.style.backgroundColor = cor;
    mural.append(cartao);
}

/**
 * Retornar a lista de cartões do Mural 
 * @return {Array}
 */
export function getCartoes()
{
    const cartoes = mural.querySelectorAll('.cartao');
    const listaCartoes = Array.from(cartoes).map(cartao => {
        return {
            conteudo: cartao.querySelector('.cartao-conteudo').textContent,
            cor: cartao.style.backgroundColor
        }
    });

    return listaCartoes;
}

export function toggleLayout() 
{
    mural.classList.toggle('mural--linha');
}

// exclusão do cartão
mural.addEventListener('click', function(event) {
    let isBotaoExcluir = event.target.classList.contains('opcoesDoCartao-remove');
    if (isBotaoExcluir) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--some');
        cartao.addEventListener('transitionend', () => cartao.remove());
    }
});

// trocar a cor do cartão
mural.addEventListener('change', function(event) {
    if (event.target.type === 'radio') {
        const cartao = event.target.closest('.cartao');
        cartao.style.backgroundColor = event.target.value;
    }
});

// troca de cor via teclado
mural.addEventListener('keypress', function(event) {
    let isLabel = event.target.tagName === 'LABEL';
    if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
        event.target.click();
    }
});