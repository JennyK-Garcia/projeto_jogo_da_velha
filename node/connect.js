const express = require('express');
const bodyParser = require('body-parser');
const { createConnection } = require('typeorm');
const Jogador = require('./Jogador');

const app = express();
app.use(bodyParser.json());

createConnection().then(connection => {
    const jogadorRepository = connection.getRepository(Jogador);

    app.post('/submit', async (req, res) => {
        const jogador1 = new Jogador();
        jogador1.nome = req.body.name;
        jogador1.numero = req.body.email; // substitua 'email' por 'numero' se você alterar o formulário

        const jogador2 = new Jogador();
        jogador2.nome = req.body.name2;
        jogador2.numero = req.body.email2; // substitua 'email2' por 'numero2' se você alterar o formulário

        await jogadorRepository.save([jogador1, jogador2]);

        res.sendStatus(200);
    });

    app.listen(3000, () => console.log('Server is running on port 3000'));
}).catch(error => console.log(error));