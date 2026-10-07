const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body;
    if(req.body) {
        const novoId = clientes.length + 1;

        req.body.id = novoId;

        clientes.push(req.body);

        res.send("Cliente cadastrado com sucesso!");
    }else {
        res.send("Não foi possível cadastrar o cliente");
    }
}
const listar = (req, res) => {
    res.json(clientes)
}
const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    clientes.forEach(cliente => {
        if (cliente.id == id) {
            cliente.id = dados.id;
            cliente.cpf = dados.cpf;
            cliente.nome = dados.nome;
        }
    });

     res.json("Cliente atualizado com sucesso!");
}
const excluir = (req, res) => { 
    const id = req.params.id;

    clientes.forEach((cliente, indice) => {
        if (cliente.id == id) {
           cliente.splice(indice, 1);
        }
    });
    res.json("Clientes excluído com sucesso!");
};
module.exports = {
    criar, listar, alterar, excluir
}