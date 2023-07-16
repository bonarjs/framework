import { FirestoreTabelaDinamicaRepository } from "src/@repositories/firestore/firestore-tabela-dinamica-repository"
import { TabelaDinamicaUseCase } from "src/@use-cases/tabela-dinamica-use-case"

const firestoreTabelaDinamicaRepository = new FirestoreTabelaDinamicaRepository(
  process.env.NEXT_PUBLIC_BNR_CODIGO_CLIENTE // código do site/cliente
)

const tabela_slug = "contato_solicitado"

const tabela_id = "SsM7swJqejPrzS7JGrzk"

const tabelaDinamicaUseCase = new TabelaDinamicaUseCase(
  firestoreTabelaDinamicaRepository
)

export async function getContatosSolicitados() {
  const content = await tabelaDinamicaUseCase.getAll(this.tabela_id)

  return content
}

export async function setContatoSolicitadoDelivered(status, document_id) {
  const contatoSolicitadoObj = await tabelaDinamicaUseCase.getDocument(this.tabela_id, document_id)

  const response = await tabelaDinamicaUseCase.update(contatoSolicitadoObj, { isDelivered : status })

  return response
}

export async function removeContatoSolicitado(document_id) {
  const contatoSolicitadoObj = await tabelaDinamicaUseCase.getDocument(this.tabela_id, document_id)

  const response = await tabelaDinamicaUseCase.remove(contatoSolicitadoObj)

  return response
}