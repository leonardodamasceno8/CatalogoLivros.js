module.exports.list_of_books = function (application, req, res) {

    var connection = application.config.dbConnection();
    var bookDAO = new application.app.models.LivrosDAO(connection);

    bookDAO.getBooks(function (error, result) {
        res.send(result);
        //res.render("listar/books", {book: result});
    });

};

module.exports.list_book = function (application, req, res) {
    let data = req.params;

    const connection = application.config.dbConnection();
    const livrosDAO = new application.app.models.LivrosDAO(connection);

    livrosDAO.getBook(data, function (error, result) {
        res.send(result);
        //res.render("listar/book", {books: result});
    });
};

module.exports.insert_book = function (application, req, res) {
    let data = req.body;

    const connection = application.config.dbConnection();
    const booksDAO = new application.app.modeles.LivrosDAO(connection);

    booksDAO.insertBook(data, function (error, result) {
        res.send(result);
    })
};
