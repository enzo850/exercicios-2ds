// CRIE SUA SOLUÇÃO ABAIXO ================
class Notificacao {
    constructor(mensagem) {
        this.mensagem = mensagem;
    }

    enviar() {
        return this.mensagem;
    }
}

class Email extends Notificacao {
    enviar() {
        return `Email enviado: ${this.mensagem}`;
    }
}

class SMS extends Notificacao {
    enviar() {
        return `SMS enviado: ${this.mensagem}`;
    }
}

class App extends Notificacao {
    enviar() {
        return `Notificação no App: ${this.mensagem}`;
    }
}

module.exports = Notificacao;
module.exports.Email = Email;
module.exports.SMS = SMS;
module.exports.App = App;
// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Notificacao
module.exports.Email = Email
module.exports.SMS = SMS
module.exports.App = App