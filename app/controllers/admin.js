module.exports.cadastro_cliente = function (application, req, res) {
    res.render("cadastro/cadastroCliente", {validacao: {}, cliente: {}})
};

module.exports.insertBook = function (application, req, res) {
    var book = req.body;
   /* req.assert('nome', 'nome é obrigatório').notEmpty();
    req.assert('horas', 'telefone é obrigatório').notEmpty();
    req.assert('date', 'cliente é obrigatório').notEmpty();*/

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro/cadastroCliente', {validacao: erros, cliente: book});
        return;
    }
    const connection = application.config.dbConnection();
    const livrosDAO = new application.app.models.LivrosDAO(connection);

    livrosDAO.insertBook(book, function (error, result) {
        console.log(result);
        res.redirect('/cadastro_cliente');
    });
};


module.exports.cadastro_item = function (application, req, res) {
    res.render("cadastro/cadastroItem", {validacao: {}, book: {}});
}
module.exports.item_salvar = function (application, req, res) {
    var item = req.body;

    req.assert('id', 'id é obrigatório').notEmpty();
    req.assert('nome', 'nome é obrigatório').notEmpty();
    req.assert('preco', 'preco é obrigatório').notEmpty();
    req.assert('data', 'Data é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro/cadastroItem', {validacao: erros, book: item});
        return;
    }
    var connection = application.config.dbConnection();
    var itemDAO = new application.app.models.ItemDAO(connection);
    itemDAO.insertBook(item, function (error, result) {
        res.redirect('/listar_itens');
    });
};
