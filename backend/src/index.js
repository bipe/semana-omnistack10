const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); //./ pois está no mesmo diretório, heirarquia como no html. //Importando rotas do arquivo
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

//Conectando ao DB usando string de conexão fornecida no mongoDB
mongoose.connect('STRING DE CONEXÃO AO DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors({ origin: 'http://localhost:3000' })); //libera o acesso EXTERNO pro nosso front end conseguir acessar 
app.use(express.json()); //express nao "entende" o json, entao usamos isso. (antes de importar rotas e outros arquivos)
app.use(routes); //Usando as rotas importadas 
server.listen(3333);
//Metodos HTTP: get, post(criar informação, cadastros etc), put(editar algum recurso) e delete

//Parametros:
//Query Params: req.query (filtros, ordenação, etc - aparece na url como por ex name=Jose)
//Route Params: usado no put ou delete - req.params (identificar um recurso na alteração ou remoção)
//Body: geralmente no post e no put (com dados da "inserção" no corpo) - req.body

//Será usado o mongoDB (NoSQL) - pela facilidade de funcionar, uso na nuvem e poucos relacionamentos na aplicação