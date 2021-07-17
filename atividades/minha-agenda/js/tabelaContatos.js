const tabela = document.querySelector('#tabelaContatos');

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