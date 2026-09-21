const Profissional = require("./Profissional");

class Medico extends Profissional {

    constructor(nome, idade) {
        super(nome, idade);
        this.registros = [];
    }

    atuacao() {
        return "Atendimento médico realizado";
    }

    adicionarRegistro(registro) {
        this.registros.push(registro);
    }
}

module.exports = Medico;