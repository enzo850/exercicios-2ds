const express = require('express')

const router = express.Router()

const pizzas = [
  {
    id: 1,
    sabor: "Mussarela",
    categoria: "tradicional",
    preco: 45,
    disponivel: true
  },
  {
    id: 2,
    sabor: "Calabresa",
    categoria: "tradicional",
    preco: 48,
    disponivel: true
  },
  {
    id: 3,
    sabor: "Portuguesa",
    categoria: "especial",
    preco: 58,
    disponivel: false
  }
];

router.get('/', (req, res) => {
  res.status(200).json(pizzas)
});

router.get('/disponiveis', (req, res) => {
  const disponiveis = pizzas.filter(
    pizza => pizza.disponivel === true
  );

  res.status(200).json(disponiveis)
});

router.get('/total', (req, res) => {
  res.status(200).json({
    total: pizzas.length
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    mensagem: "Cadastro de pizza realizado"
  });
});

module.exports = router