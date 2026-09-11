const Notificacao = require("./Notificacao")

// CRIE SUA SOLUÇÃO ABAIXO ================

const Email = Notificacao.Email
const SMS = Notificacao.SMS
const App = Notificacao.App

class Factory {

    static criar(tipo, mensagem) {

        switch (tipo) {
            case "email":
                return new Email(mensagem)

            case "sms":
                return new SMS(mensagem)

            case "app":
                return new App(mensagem)

            default:
                throw new Error("Tipo de notificação inválido")
        }
    }
}

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory