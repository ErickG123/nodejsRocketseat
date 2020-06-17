// Importando o mongoose para criar o Schema
const mongoose = require('mongoose');
// Importando o mongoosePaginate para ajudar na paginação
const mongoosePaginate = require('mongoose-paginate');

// Criando o Schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

// Registrando um model na aplicação 
mongoose.model('Product', ProductSchema);