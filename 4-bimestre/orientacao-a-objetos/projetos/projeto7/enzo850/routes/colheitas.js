const express = require("express")
const router = express.Router()

const validarColheita = require("../middlewares/validarColheita")

let colheitas = [
    {
        id: 1,
        voluntario: "Ana",
        cultivo: "Alface",
        quilos: 5,
        situacao: "distribuida"
    },
    {
        id: 2,
        voluntario: "Bruno",
        cultivo: "Tomate",
        quilos: 12,
        situacao: "colhida"
    },
    {
        id: 3,
        voluntario: "Carla",
        cultivo: "Cenoura",
        quilos: 8,
        situacao: "colhida"
    }
]

// GET - Listar colheitas
router.get("/", (req, res) => {
    let resultado = colheitas

    const { situacao, quilosMin } = req.query

    if (situacao) {
        resultado = resultado.filter(c =>
            c.situacao === situacao
        )
    }

    if (quilosMin) {
        resultado = resultado.filter(c =>
            c.quilos >= Number(quilosMin)
        )
    }

    res.status(200).json(resultado)
})

// GET - Buscar por ID
router.get("/:id", (req, res, next) => {
    const id = Number(req.params.id)

    const colheita = colheitas.find(c => c.id === id)

    if (!colheita) {
        const erro = new Error("Colheita nao encontrado")
        erro.status = 404

        return next(erro)
    }

    res.status(200).json(colheita)
})

// POST - Criar colheita
router.post("/", validarColheita, (req, res) => {
    const { voluntario, cultivo, quilos } = req.body

    const novoId = Math.max(...colheitas.map(c => c.id)) + 1

    const novaColheita = {
        id: novoId,
        voluntario,
        cultivo,
        quilos,
        situacao: "prevista"
    }

    colheitas.push(novaColheita)

    res.status(201).json({
        mensagem: "Registro de colheita criado"
    })
})

module.exports = router