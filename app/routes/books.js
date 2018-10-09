module.exports = function (application) {
    application.get('/list_of_books', function (req, res) {
        application.app.controllers.books.list_of_books(application, req, res);
    });
    application.get('/book/:id', function (req, res) {
        application.app.controllers.books.list_book(application, req, res);
    });
    application.post('/insert_book', function (req, res) {
        application.app.controllers.books.insert_book(application, req, res);
    });
    application.post('/update')
};
