const axios = require('axios');

const Personagem = async (filme) => {
    const URL = `https://swapi.dev/api/films/${filme}`
    try {
        const resposta = await axios.get(URL);
        
        const characters = [];
        const id = [];

        for (const index in resposta.data.characters) {
            let charUrl = await axios.get(resposta.data.characters[index]);
            let char = charUrl.data;
            characters.push([char.name]);
            id.push([char.url]);
        }

        return [characters, id];

    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { Personagem };