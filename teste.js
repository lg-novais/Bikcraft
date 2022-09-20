function livro(nome, ano, autor) {
  const nomeGrande = nome.toUpperCase();
  const totalAno = 2022 - ano;
  const fraseFinal = nome + " por " + autor;
  const objeto = {
    nome: nomeGrande,
    Ano: totalAno,
    frase: fraseFinal,
  };
  return objeto;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livro.nome);
