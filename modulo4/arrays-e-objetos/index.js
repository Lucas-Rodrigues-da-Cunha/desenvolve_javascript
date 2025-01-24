// Crie um sistema simples para gerenciar o estoque de uma livraria. 
// O sistema deve permitir adicionar livros ao estoque, remover livros, atualizar a quantidade de livros e listar todos os livros disponíveis.
//Passos:

// 1 - Defina um array de objetos para armazenar os livros no estoque.
// * Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade.

const estoque = [
    {título: 'Gênesis', autor: 'Moises', quantidade: 500, id: 1000},
    {título: 'Mateus', autor: 'Apostolo Mateus', quantidade: 500, id: 3300},
    {título: 'Moonwalk', autor: 'Michael Jackson', quantidade: 100, id: 1988},
    {título: 'Sonic The Hedgehog #1', autor: 'Ian Flynn', quantidade: 70, id: 2017},
    {título: 'Darth Plagueis', autor: 'James Luceno', quantidade: 25, id: 2007}
];
console.log(estoque);
console.log('-----------------');

// 2 - Crie funções para gerenciar o estoque:
// * adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque.
// * (Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.)
// 3 - Use condicionais para verificar se um livro já existe antes de adicioná-lo ou removê-lo.
// 4 - Use laços de repetição para iterar sobre o array de livros quando necessário.

const adicionarLivros = (título, autor, quantidade, id) => {
    const livroExiste = estoque.some(livro => livro.id === id);
    if (livroExiste) {
        console.log(`O livro ${título} já está no estoque.`);
    }
    else estoque.push({
        título,
        autor,
        quantidade,
        id
    });
    console.log(`O livro ${título} foi adicionado com sucesso!`);
};
adicionarLivros('Dragon Ball - Vol.1', 'Akira Toriyama', 60, 1986);
console.log(estoque);
adicionarLivros('Mateus','Apostolo Mateus', 500, 3300);
console.log(estoque);
console.log('-----------------');

// * removerLivro(titulo) - Remove um livro do estoque pelo título.

const removerLivro = (idDoLivro) => {
    const idPresenteNoEstoque = !!estoque.find(livro => livro.id === idDoLivro);
    if(idPresenteNoEstoque) {
        for(let indice = 0; indice < estoque.length; indice++) {
            if(estoque[indice].id === idDoLivro) {
                console.log(`O livro ${estoque[indice].título} foi encontrado e removido com sucesso!`);
                estoque.splice(indice, 1);
                break;
            }
        }
    }
    else {
        console.log(`O livro de id ${idDoLivro} não foi encontrado.`);
    }
};
removerLivro(2007);
removerLivro(1986);
removerLivro(2026);
console.log(estoque);
console.log('-----------------');

// * atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque.

const atualizarQuantidade = (idDoLivro, novaQuantidade) => {
    const idPresenteNoEstoque = !!estoque.find(livro => livro.id === idDoLivro);
    if(idPresenteNoEstoque) {
        for(let livro of estoque) {
            if(livro.id === idDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log(`O livro ${livro.título} foi encontrado e sua quantidade foi atualizada!`);
                break;
            }
        }
    }
    else {
        console.log(`O livro de id ${idDoLivro} não foi encontrado.`);
    }
};
atualizarQuantidade(1988, 101);
atualizarQuantidade(1000, 1000000);
atualizarQuantidade(2026, 1);
console.log(estoque);
console.log('-----------------');

// * listarLivros() - Lista todos os livros no estoque.

const listarLivros = () => {
    if(estoque.length === 0) {
        console.log(`O estoque infelizmente está vazio.`)
    }
    else {
        console.log(`O estoque possui ${estoque.length} livros`);
        for(let livros of estoque) {
        console.log(`
            Id: ${livros.id}
            Livro: ${livros.título}
            Autor; ${livros.autor}
            Quantidade ${livros.quantidade}
            `);
        }
    }
};
listarLivros();