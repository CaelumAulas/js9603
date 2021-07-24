/** @type {IDBDatabase} */
let db;
const subscribers = [];

const requestDb = indexedDB.open('db_ceep_backup', 2);
requestDb.addEventListener('success', () => {
    db = requestDb.result;
    carregarCartoes();
});

requestDb.addEventListener('upgradeneeded', () => {
    db = requestDb.result;
    db.createObjectStore('store_cartoes', { keyPath: 'id', autoIncrement: true });
});

function carregarCartoes()
{
    const tx = db.transaction('store_cartoes');
    const request = tx.objectStore('store_cartoes').getAll();
    request.onsuccess = () => {
        const listaCartoesSalvos = request.result ?? [];
        subscribers.forEach(funcao => {
            funcao(listaCartoesSalvos);
        });
    }
}

export function IDBSubscribeOnLoadCartoes(funcaoCallback)
{
    subscribers.push(funcaoCallback);
}

/**
 * Salvar a lista de cartões no mural no banco de dados do navegador
 * @param {Array} listaDeCartoes    Array contendo as informações dos cartões
 * @return {Promise<string>}
 */
export function salvarCartoesStore(listaDeCartoes)
{
    return new Promise(function(resolve, reject) {
        const tx = db.transaction('store_cartoes', 'readwrite');
        tx.objectStore('store_cartoes').clear();

        for (let cartao of listaDeCartoes)
        {
            tx.objectStore('store_cartoes').add(cartao);
        }

        tx.oncomplete = () => resolve('Cartões salvos com sucesso na base de dados local!');
        tx.onerror = () => reject('Erro ao salvar dados na base de dados local!');
    });
}

export function excluirCartoesStore()
{
    return new Promise(function(resolve, reject) {
        const tx = db.transaction('store_cartoes', 'readwrite');
        tx.objectStore('store_cartoes').clear();
        tx.oncomplete = () => resolve('Cartões locais excluídos com sucesso!');
        tx.onerror = () => reject('Erro ao excluir os cartões locais!');
    });
}