
const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');


// Definindo as rotas e associando aos métodos do controller
router.post('/novo', notesController.criarNotes);            // Criar um novo Notes
router.get('/', notesController.listarNotes);           // Listar todos os Notess
router.put('/:id', notesController.atualizarNotes);    // Atualizar um Notes por ID
router.delete('/:id', notesController.deletarNotes);     // Deletar um Notes por ID 
router.get('/notes/:id', notesController.obterDetalhesNote); //Obter Detalhes de uma nota 



module.exports = router;
