
const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_AGENDAMENTOS || "agendamentos.json"

async function listar() {
    try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")
        return JSON.parse(conteudo)
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }

        throw erro
    }
}

async function salvar(agendamento) {
    const agendamentos = await listar()

    agendamentos.push(agendamento)

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(agendamentos, null, 2)
    )

    return agendamento
}

async function atualizar(id, dados) {
    const agendamentos = await listar()

    const indice = agendamentos.findIndex(
        agendamento => agendamento.id === id
    )

    if (indice === -1) {
        return null
    }

    agendamentos[indice] = {
        ...agendamentos[indice],
        ...dados
    }

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(agendamentos, null, 2)
    )

    return agendamentos[indice]
}

async function remover(id) {
    const agendamentos = await listar()

    const restantes = agendamentos.filter(
        agendamento => agendamento.id !== id
    )

    if (restantes.length === agendamentos.length) {
        return false
    }

    await fs.writeFile(
        ARQUIVO,
        JSON.stringify(restantes, null, 2)
    )

    return true
}

module.exports = { listar, salvar, atualizar, remover }
