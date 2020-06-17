const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // Listagem de produtos
    async index(req, res) {
        // Pegando a página
        const { page = 1 } = req.query;

        // Retorna todos os produtos que ele encontrou no banco
        // .paginate({ condiçaõ }, {page: página atual limit: limite de dados por página})
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    // Listagem de um único produto
    async show(req, res) {
        // Retorna todos os produtos que ele encontrou no banco de acordo com o ID
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Criação de produtos
    async store(req, res) {
        // Cria um produto de acordo com os dados recebidos do corpo do request
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Update de produtos
    async update(req, res) {
        // Encontra um produto pelo ID e atualiza ele de acordo com o body
        // { new: true } retorna o produto atualizado para dentro da variável product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
        return res.json(product);
    },

    // Delete de produtos
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};