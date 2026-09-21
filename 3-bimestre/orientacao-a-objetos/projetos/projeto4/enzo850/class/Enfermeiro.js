const Profissional = require("./Profissional");

class Enfermeiro extends Profissional {

    atuacao() {
        return "Atendimento de enfermagem realizado";
    }
}

module.exports = Enfermeiro;