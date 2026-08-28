class Funcionario {
    #salario

    static quantidade = 0

    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario

        Funcionario.quantidade++
    }

    get salario() {
        return this.#salario
    }

    set salario(novoSalario) {
        if (novoSalario >= 0) {
            this.#salario = novoSalario
        }
    }

    alterarSalario(novoSalario) {
        if (novoSalario < 0) {
            return false;
        }

        this.#salario = novoSalario
        return true;
    }

    apresentar() {
        return `${this.nome} - ${this.cargo}`
    }

    identificacao() {
        return `${this.nome} - ${this.cargo}`
    }

    static quantidadeFuncionarios() {
        return Funcionario.quantidade
    }
}

module.exports = Funcionario
