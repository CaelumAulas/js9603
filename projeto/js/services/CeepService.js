const CEEP_API_URL = 'http://wd47-ceep.herokuapp.com';

/**
 * Retorna a lista de instruções de ajuda cadastradas no back-end da aplicação
 * @returns {Promise<Array>}
 */
export async function getInstrucoes()
{
    const resposta = await fetch(CEEP_API_URL + '/get-instrucoes.php');
    const dadosCarregados = await resposta.json();
    const mensagens = dadosCarregados.instrucoes;

    return mensagens;
}

/**
 * Salva a lista de cartões passada no servidor da aplicação
 * @param {Array} listaDeCartoes    Array contendo as informações de cada cartão
 * @return {Promise<string>}
 */
export async function salvarCartoesServidor( listaDeCartoes )
{
    const infoUsuario = {
        usuario: 'jhonatan.jacinto@caelum.com.br',
        cartoes: listaDeCartoes
    }

    try 
    {
        const resposta = await fetch(CEEP_API_URL + '/salvar-cartoes.php', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(infoUsuario)
        });

        const dadosRetornados = await resposta.json();

        if (dadosRetornados.quantidade == 1) {
            return 'Cartão salvo com sucesso!';
        }
        else {
            return dadosRetornados.quantidade + ' cartões salvos com sucesso!';
        }
    }
    catch(e) 
    {
        console.error(e);
        return 'Erro ao enviar informações para o servidor!';
    }
}

/**
 * Retorna a lista de cartões salvos no back-end
 * @return {Promise<Array>}
 */
export async function getCartoesServidor()
{
    let usuario = 'jhonatan.jacinto@caelum.com.br';
    const resposta = await fetch(CEEP_API_URL + '/get-cartoes.php?usuario=' + usuario);
    const dadosCartoes = await resposta.json();

    // ?? => Null Coaslescing Operator
    return dadosCartoes.cartoes ?? [];
}