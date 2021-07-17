
import { adicionarContato } from "./tabelaContatos.js";

const formulario = document.querySelector('#formCadastro');
const campoNome = document.querySelector('#inputNome');
const campoTelefone = document.querySelector('#inputTelefone');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // bloqueia o recarregamento da página
    if (campoNome.value.trim() === '') {
        alert(campoNome.dataset.msg);
    }
    else if (campoTelefone.value.trim() === '') {
        alert(campoTelefone.dataset.msg);
    }
    else {
        // cadastro o contato na tabela
        let nome = campoNome.value.trim();
        let telefone = campoTelefone.value.trim();
        adicionarContato(nome, telefone);
        
        formulario.reset();
    }
});