const Notificacao = require("./Notificacao")
// CRIE SUA SOLUÇÃO ABAIXO ================
const Notificacao = require("./Notificacao");

const Email = Notificacao.Email;
const SMS = Notificacao.SMS;
const App = Notificacao.App;

class NotificacaoFactory {

    static criar(tipo, mensagem) {

        switch (tipo) {
            case "email":
                return new Email(mensagem);

            case "sms":
                return new SMS(mensagem);

            case "app":
                return new App(mensagem);

            default:
                throw new Error("Tipo de notificação inválido");
        }
    }
}

module.exports = NotificacaoFactory;
module.exports = Notificacao;
module.exports.Email = Email;
module.exports.SMS = SMS;
module.exports.App = App;



// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory