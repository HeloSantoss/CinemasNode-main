const mongoose = require('mongoose');


const NotesSchema = new mongoose.Schema({
    Nome_da_Anotacao: {
        type: String,
        required: true
    },
    Data: {
        type: String,
        required: true
    }
    
});


module.exports = mongoose.model('Notes', NotesSchema);
