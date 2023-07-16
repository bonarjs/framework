import { FirestoreTabelaDinamicaRepository } from "src/@repositories/firestore/firestore-tabela-dinamica-repository"
import { TabelaDinamicaUseCase } from "src/@use-cases/tabela-dinamica-use-case"

const firestoreTabelaDinamicaRepository = new FirestoreTabelaDinamicaRepository(
  process.env.NEXT_PUBLIC_BNR_CODIGO_CLIENTE // código do site/cliente
)

const codigo_tabela = "SsM7swJqejPrzS7JGrzk"

const tabelaDinamicaUseCase = new TabelaDinamicaUseCase(
  firestoreTabelaDinamicaRepository
)

export async function getContatosSolicitados() {
  const content = await tabelaDinamicaUseCase.getAll(codigo_tabela)

  return content
}

export async function setContatoSolicitadoDelivered(status, id) {
  const contatoSolicitadoObj = await tabelaDinamicaUseCase.getDocument(codigo_tabela, id)

  const response = await tabelaDinamicaUseCase.update(contatoSolicitadoObj, { isDelivered : status })

  return response
}

export async function removeContatoSolicitado(id) {
  const contatoSolicitadoObj = await tabelaDinamicaUseCase.getDocument(codigo_tabela, id)

  const response = await tabelaDinamicaUseCase.remove(contatoSolicitadoObj)

  return response
}