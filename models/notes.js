const mongoose = require('mongoose');


const NotesSchema = new mongoose.Schema({
    Nome_da_Anotacao: {
        type: String,
        required: true
    },
    Data: {
        type: String,
        required: true
    },
    Anotacao: {
        type: String,
        required: true
    }  // Adicione as outras colunas necessárias para armazenar os dados de anotações.
    
});


module.exports = mongoose.model('notes', NotesSchema);
