
const http = require("node:http")
const { carregarConfig } = require("./config")
const handler = require("./index")

const { porta, servico, ambiente } = carregarConfig()

const servidor = http.createServer(handler)

servidor.listen(porta, () => {
  console.log(`${servico} rodando na porta ${porta}`)
  console.log(`Ambiente: ${ambiente}`)
})
