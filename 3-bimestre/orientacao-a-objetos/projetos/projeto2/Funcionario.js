class Funcionario {

    // Controle geral dos funcionários
    static quantidade = 0;


    #salario;


    constructor(nome, cargo, salario) {

        this.nome = nome;
        this.cargo = cargo;
        this.#salario = salario;

        Funcionario.quantidade++;

    }


    // Getter do salário protegido
    get salario() {

        return this.#salario;

    }


    // Alteração salarial com regra de negócio
    set salario(novoSalario) {

        if (novoSalario >= 0) {

            this.#salario = novoSalario;

        }

    }


    // Retorna quantidade de funcionários
    static quantidadeFuncionarios() {

        return Funcionario.quantidade;

    }


    // Identificação textual
    apresentar() {

        return `${this.nome} - ${this.cargo}`;

    }

}


module.exports = Funcionario;