const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body;
    if(req.body) {
        const novoId = produtos.length + 1;

        req.body.id = novoId;

        produtos.push(req.body);

        res.send("Produto cadastrado com sucesso!");
    }else {
        res.send("Não foi possível cadastrar o produto");
    }
}
const listar = (req, res) => {
    res.json(produtos)
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    produtos.forEach(produto => {
        if (produto.id == id) {
            produto.id = dados.id;
            produto.nome = dados.nome;
            produto.preco = dados.preco;
        }
    });

    res.json("Produto atualizado com sucesso!");
}

const excluir = (req, res) => { 
    const id = req.params.id;

    produtos.forEach((produto, indice) => {
        if (produto.id == id) {
            produtos.splice(indice, 1);
        }
    });

    res.json("Produto excluído com sucesso!");
};
module.exports = {
    criar, listar, alterar, excluir
}