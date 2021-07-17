const mural = document.querySelector('.mural');

export function toggleLayout() {
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