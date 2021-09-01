function Postagem(titulo,autor,mensagem) {
    this.titulo = titulo,
    this.autor = autor,
    this.mensagem = mensagem,
    this.visualizacoes = 0;
    this.comentarios = [],
    this.aoVivo = false
}

let post = new Postagem('harry potter','a mulher la','blablabla');
