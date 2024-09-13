const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');
require('dotenv').config();
const cors = require('cors')
require('./config/database'); // Conectando ao banco de dados


const app = express();


// Middlewares
app.use(bodyParser.json());
app.use(cors());


// Rotas
app.use('/notes', noteRoutes);


// Exportando a aplicação configurada
module.exports = app;
