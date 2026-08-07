class Animal{
  constructor(nome , especie){
    this.nome = nome
    this.especie = especie
  }
}

const rex = new Animal("Rex","Cachorro")
const mimi = new Animal("Mimi","Gato")

module.exports = [rex, mimi]