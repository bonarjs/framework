export interface TabelaDinamicaRepository {
    getOneById(tabela, id)

    getAll: (tabela) => Promise<any>

    getDocument(tabela, id)

    update: (document, content) => Promise<any>

    remove: (document) => Promise<any>
}