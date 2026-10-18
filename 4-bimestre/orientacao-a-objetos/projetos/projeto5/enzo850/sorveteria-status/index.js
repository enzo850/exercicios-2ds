
const { carregarConfig } = require("./config")

function handler(req, res) {
  const config = carregarConfig()

  if (req.url === "/") {
    res.statusCode = 200
    res.end(`Monitor do servico: ${config.servico}`)
    return
  }

  if (req.url === "/eco") {
    res.statusCode = 200
    res.end("eco")
    return
  }

  if (req.url === "/status") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({
      online: true,
      ...config
    }))
    return
  }

  res.statusCode = 404
  res.end("Rota nao encontrada")
}

module.exports = handler
