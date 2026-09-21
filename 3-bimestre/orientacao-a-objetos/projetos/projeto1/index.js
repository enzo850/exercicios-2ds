class Livro {

    constructor(titulo, autor, ano) {

        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;

        // Todo livro começa disponível
        this.disponivel = true;
    }


    emprestar() {

        // Só empresta se estiver disponível
        if (this.disponivel === true) {
            this.disponivel = false;
        }

    }


    devolver() {

        // Torna disponível novamente
        if (this.disponivel === false) {
            this.disponivel = true;
        }

    }


    estaDisponivel() {

        return this.disponivel;

    }

}


module.exports = Livro;