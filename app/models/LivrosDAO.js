function LivrosDAO(connection) {
    this._connection = connection;
}

LivrosDAO.prototype.getBooks = function (callback) {
    this._connection.query('select * from books', callback);
};
LivrosDAO.prototype.getBook = function (book, callback) {
    this._conneection.query('select * from books WHERE id= ' + book.id, callback);
};
LivrosDAO.prototype.insertBook = function (book, callback) {
    this._connection.query('insert into books set ? ', book, callback);
};
LivrosDAO.prototype.updateBookName = function (olderBook, newBook, callback) {
    this._connection.query('UPDATE book SET name = ?  WHERE id = ?', [newBook.name, olderBook.id], function (error, results, fields) {
        if (error) throw error;
        callback(results, fields);
    });
};
LivrosDAO.prototype.deleteBookByName = function (book, callback) {
    this._connection.query("DELETE FROM book WHERE name= " + book.name, function (err, result) {
        if (err) throw err;
        console.log(result);
        callback(result);
    });
};

module.exports = function () {
    return LivrosDAO;
};
