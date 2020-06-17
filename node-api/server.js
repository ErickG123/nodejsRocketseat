// Importando o express para ajudar nas rotas
const express = require('express');
// Importando o mongooose usar o Banco de Dados
const mongoose = require('mongoose'); 
// Importando o requireDir para ajudar no require dos models
const requireDir = require('require-dir');
// Importando o CORS para ajudar no controle de domínios
const cors = require('cors');

// Iniciando o App
const app = express();
// Permite o envio de dados no formato JSON
app.use(express.json());
// Permite o acesso de qualquer dominío
app.use(cors());

// Iniciando o Banco de Dados
mongoose.connect('mongodb+srv://Erick:Erick123@cluster0-zrsng.mongodb.net/nodeapi?retryWrites=true&w=majority', {  
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Importando os models da aplicação
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

// Instanciando a aplicação na porta 3001
// npm run dev para rodar a aplicação
app.listen(3001);