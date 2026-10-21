const express = require('express')

const router = express.Router()

const clientes = [
  { id: 1, nome: "Ana", bairro: "centro" },
  { id: 2, nome: "Bruno", bairro: "sul" }
]

router.get('/', (req, res) => {
  res.status(200).json(clientes)
})

router.get('/total', (req, res) => {
  res.status(200).json({
    total: clientes.length
  })
})
module.exports = router