const logger = require('../config/logger');

const livros = [];
let proxId = 0;


const getLivroIdx = id => {
    logger.info('Procurando o indice do livro com id ' + id);
    let index = livros.map (l => l.id).indexOf(id);

    if (index < 0) {
        logger.error('Não foi encontrado livro com id ' + id);
    }

    return index;

}

const LivrosRepository = {
    adicionar: (livro) => {
        let novo = {
            id: proxId++,
            titulo: livro.titulo,
            autor: livro.autor
        };
        livros.push(novo);
        return novo;
    },

    recuperar : id => livros[getLivroIdx(id)],
    alterar : (id,novo) => {
        livros[getLivroIdx(id)] = novo;
        novo.id = id;
        return novo;
    },
    remover: id => livros.splice(getLivrosIdx(id), 1),
    todos: () => livros
};

module.exports = LivrosRepository;
