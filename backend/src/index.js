const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// GET : busca info
// POST : Criar informação backed
// PUT : Alterar info no backend
// DELETE : Deletar info

// Query param: Parametros enviados na rota apos "?" (?nome=Tal&pag=tal)
// Route params: Parametros utilizados para identificar recursos
// Request body : corpo da requisição, utilizado para criar ou alterar recuros

// SQL
// NoSQL