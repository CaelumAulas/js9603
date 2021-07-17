const tabela = document.querySelector('#tabelaContatos');

/**
 * Adiciona um novo contato na tabela
 * @param {string} nome Nome do contato
 * @param {string} telefone Telefone do Contato
 * @returns {void}
 */
export function adicionarContato(nome, telefone) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td>
            <button	class="btn btn-danger btn-sm">
                Excluir
            </button>
        </td>
    `;

    tabela.append(tr);
}

tabela.addEventListener('click', function (event) {
    let temClasseDanger = event.target.classList.contains('btn-danger');
    if (temClasseDanger) {
        event.target.closest('tr').remove();
    }
});