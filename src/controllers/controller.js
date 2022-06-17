const { Personagem } = require("../api/personagem");

class Controller {
    async buscar(req, res) {
        const { filme } = req.body;
        const personagem = await Personagem(filme);
        if (personagem) {
            return res.render('resultado', { personagem: personagem });
        }
        return res.send("nome nao encontrado");
    }

}

module.exports = { Controller };