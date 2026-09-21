const Profissional = require("./Profissional");

class Recepcionista extends Profissional {

    atuacao() {
        return "Atendimento de recepção realizado";
    }
}

module.exports = Recepcionista;