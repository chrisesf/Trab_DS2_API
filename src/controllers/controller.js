const { Personagem, Detalha } = require("../api/personagem");

class Controller {
    async buscar(req, res) {
        const { filme } = req.body;
        const personagem = await Personagem(filme);
        if (personagem) {
            return res.render('resultado', { personagem: personagem });
        }
        return res.send("nome nao encontrado");
    }

    async detalhar(req, res) {
        const charId  = req.params.url
        const detail = await Detalha(charId);
        if (detail) {
            return res.render('detalha', { detail: detail });
        }
        return res.send("nome nao encontrado");
    }

}

module.exports = { Controller };