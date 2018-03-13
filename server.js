/* ------------- Requisita os modulos ------------- */
const express = require('express');
const cors = require('cors');
const expressMongoDB = require('express-mongo-db');
const bodyParser = require('body-parser');

/*  ------------- Configurações de acesso  -------------  */
const port = 3000 /* Declara a porta do servidor */
const database = {      /* Declara o nome do banco e a coleção*/
    name: "your_db_name_here",
    collection: "your_collection_name_here"
};

/*  ------------- Configurações do Express  -------------  */
/* Cria uma instância do Express para app */
const app = express();
/* Diz ao Express para utilizar o Cors */
app.use(cors());
/* Diz ao Express para utilizar o Body-Parser que deve retorna dados recebidos em JSON */
app.use(bodyParser.json());

/* Diz ao Express para usar o ExpressMongoDB conectando-o a um banco */
app.use(expressMongoDB(`mongodb://localhost/${database.name}`));

/* ------------- Declaração de funções ------------- */
/* Exibe mensagens */
function display(msg) {
    console.log(msg);
}
/* Pega todos os documentos da collection */
function getAll(req, res) {
    req.db.collection(database.collection).find().toArray(function (er, d) {
        if (er) {
            display('getAll() erro');
            display(er);
            res.send(er);
        } else {
            res.send(d);
        }
    });
}
/* Coloca um novo Documento */
function insert(req, res) {
    req.db.collection(database.collection).insertOne(req.body, function (er, r) {
        if (er) {
            display('insert() erro');
            display(er);
            res.send(er);
        } else {
            res.send(r);
        }
    });

}


/* ------------- Rotas de requisição ------------- */
/* Rota raiz GET  */
app.get('/', function (req, res) {
    getAll(req, res);
    display(`Cliente em GET`);
});
/* Rota /colocar POST */
app.post('/colocar', function (req, res) {
    insert(req, res);
    display(`Cliente em POST`);
});


/* Diz ao Express para iniciar o servidor ovindo a porta */
app.listen(port, function () {
    display(`Servidor iniciado...`);
    display(`http://localhost:${port}`);
});