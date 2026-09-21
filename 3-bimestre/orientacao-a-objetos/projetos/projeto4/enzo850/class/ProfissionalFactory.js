const Medico = require("./Medico");
const Enfermeiro = require("./Enfermeiro");
const Recepcionista = require("./Recepcionista");


class ProfissionalFactory {

    static criar(tipo, nome, idade) {

        switch(tipo) {

            case "medico":
                return new Medico(nome, idade);

            case "enfermeiro":
                return new Enfermeiro(nome, idade);

            case "recepcionista":
                return new Recepcionista(nome, idade);

            default:
                throw new Error("Tipo de profissional inválido");
        }

    }

}


module.exports = ProfissionalFactory;