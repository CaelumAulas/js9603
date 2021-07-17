const divMsg = document.createElement('div');
divMsg.classList.add('formNovoCartao-msg');
divMsg.addEventListener('animationend', () => divMsg.remove());

/**
 * Mostra mensagens de notificação para o usuário
 * @param {string} mensagem     Mensagem a ser exibida ao usuário
 * @returns {void}
 */
export function notificar(mensagem) 
{
    divMsg.textContent = mensagem;
    document.body.append(divMsg);
}
