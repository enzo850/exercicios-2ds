const express = require("express")
const app = express()

const colheitasRouter = require("./routes/colheitas")

app.use(express.json())

// Rotas de colheitas
app.use("/colheitas", colheitasRouter)

// Rota inexistente
app.use((req, res) => {
    res.status(404).json({
        erro: "Rota nao encontrada"
    })
})

// Middleware de erro
app.use((erro, req, res, next) => {
    res.status(erro.status || 500).json({
        erro: erro.message
    })
})

module.exports = app