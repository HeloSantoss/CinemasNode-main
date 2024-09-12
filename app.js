const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');
require('dotenv').config();
require('./config/database'); // Conectando ao banco de dados


const app = express();


// Middlewares
app.use(bodyParser.json());


// Rotas
app.use('/notes', noteRoutes);


// Exportando a aplicação configurada
module.exports = app;
