const mural = document.querySelector('.mural');
const cartaoModelo = document.querySelector('#template-cartao').content.firstElementChild;
let numeroCartao = 0;

/**
 * Adiciona um novo cartão no mural
 * @param {string} conteudo     Texto do cartão que será criado
 * @return {void}
 */
export function adicionarCartao(conteudo)
{
    numeroCartao++;
    const cartao = cartaoModelo.cloneNode(true);
    cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo);
    mural.append(cartao);
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