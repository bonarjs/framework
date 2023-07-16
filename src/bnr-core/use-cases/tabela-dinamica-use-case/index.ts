import { TabelaDinamicaRepository } from "src/@repositories/tabela-dinamica-repository"

export class TabelaDinamicaUseCase {
    constructor(
        private tabelaDinamicaRepository: TabelaDinamicaRepository
        ) {}

    async getAll(tabela) {
        const data = await this.tabelaDinamicaRepository.getAll(tabela)
        // console.log(data)
        const json = data.map(doc => Object.assign(doc.data(), {id: doc.id}))
        return json
    }

    async getOneById(tabela, id) {
        const data = await this.tabelaDinamicaRepository.getOneById(tabela, id)
        
        return data
    }

    async getDocument(tabela, id) {
        const response = await this.tabelaDinamicaRepository.getDocument(tabela, id)
        
        // const json = response.map(doc => Object.assign(doc.data(), {id: doc.id}))

        // console.log(json)

        return response
    }

    async update(document, content) {
        const response = await this.tabelaDinamicaRepository.update(document, content)

        return response
    }

    async remove(document) {
        const response = await this.tabelaDinamicaRepository.remove(document)

        return response
    }
}