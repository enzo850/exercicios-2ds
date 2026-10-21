const express = require('express')

const router = express.Router()

const pizzasRouter = require('./pizzas')
const clientesRouter = require('./clientes')

router.get('/', (req, res) => {
  res.status(200).json({
    mensagem: "API de Pizzaria"
  });
});

router.use('/pizzas', pizzasRouter)
router.use('/clientes', clientesRouter)

module.exports = router