const itens = require("../../dados/itens.json")

const criar = (req, res) => {
    const dados = req.body;

    if(req.body) {
        const novoId = itens.length + 1;

        req.body.id = novoId;

        itens.push(req.body);

        res.send("Item cadastrado com sucesso!");
    } else {
        res.send("Não foi possível cadastrar o item");
    }
}

const listar = (req, res) => {
    res.json(itens)
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    itens.forEach(item => {
        if (item.id == id) {
            item.id = dados.id;
            item.pedido_id = dados.pedido_id;
            item.produto_id = dados.produto_id;
            item.preco = dados.preco;
            item.quantidade = dados.quantidade;
        }
    });

    res.json("Item atualizado com sucesso!");
}

const excluir = (req, res) => {
    const id = req.params.id;

    itens.forEach((item, indice) => {
        if (item.id == id) {
            itens.splice(indice, 1);
        }
    });

    res.json("Item excluído com sucesso!");
};

module.exports = {
    criar, listar, alterar, excluir
}