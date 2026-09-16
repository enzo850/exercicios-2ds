const Declaracao = require("./Declaracao")

const Matricula = Declaracao.Matricula;
const Frequencia = Declaracao.Frequencia;
const Conclusao = Declaracao.Conclusao;


class Factory {

    static criar(tipo, aluno) {

        switch(tipo) {

            case "matricula":
                return new Matricula(aluno);

            case "frequencia":
                return new Frequencia(aluno);

            case "conclusao":
                return new Conclusao(aluno);

            default:
                throw new Error("Tipo de declaração inválido")
        }

    }

}


module.exports = Factory