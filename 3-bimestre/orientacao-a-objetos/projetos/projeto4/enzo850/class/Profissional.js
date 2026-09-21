class Profissional {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    atuacao() {
        return "Profissional cadastrado no sistema";
    }
}

module.exports = Profissional;