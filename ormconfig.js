import {createConnection} from "typeorm";

// createConnection method will automatically read connection options
// from your ormconfig file or environment variables
const connection = await createConnection();

 module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "afn-8188",
    "database": "postgres",
     entities: [
         "entities/Jogador.js"
         // outros arquivos de entidade aqui...
     ]
 };

 