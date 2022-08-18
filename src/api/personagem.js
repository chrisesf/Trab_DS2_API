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
            let str = char.url;
            let res = str.replace(/\D/g, "");
            id.push([res]);
        }

        return [characters, id];

    } catch (error) {
        console.log({ error });
        return null;
    }
}

const Detalha = async (charId) => {
    const URL = `https://swapi.dev/api/people/${charId}`
    
    try {
        const resposta = await axios.get(URL);

        const details = [];

        details.push([resposta.data.name], [resposta.data.height], [resposta.data.mass], 
            [resposta.data.hair_color], [resposta.data.skin_color], [resposta.data.eye_color], 
            [resposta.data.birth_year]);

        return [details];

    } catch (error) {
        console.log({ error });
        return null;
    }
}

module.exports = { Personagem, Detalha };