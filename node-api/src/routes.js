// Importando o express para ajudar nas rotas
const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rotas
// Rota de listagem
routes.get('/products', ProductController.index);
// Rota de criação
routes.post('/products', ProductController.store)
// Rota de listagem indivudual
routes.get('/products/:id', ProductController.show);
// Rota de update
routes.put('/products/:id', ProductController.update);
// Rota de delete
routes.delete('/products/:id', ProductController.destroy);
module.exports = routes;
