class Declaracao {
    constructor(aluno) {
        this.aluno = aluno
    }

    emitir() {
        throw new Error("Método não implementado");
    }
}


class Matricula extends Declaracao {

    emitir() {
        return `Declaração de matrícula emitida para: ${this.aluno}`;
    }

}


class Frequencia extends Declaracao {

    emitir() {
        return `Declaração de frequência emitida para: ${this.aluno}`;
    }

}


class Conclusao extends Declaracao {

    emitir() {
        return `Declaração de conclusão emitida para: ${this.aluno}`;
    }

}


module.exports = Declaracao

module.exports.Matricula = Matricula
module.exports.Frequencia = Frequencia
module.exports.Conclusao = Conclusao