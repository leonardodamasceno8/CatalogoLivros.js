function ItemDAO(connection) {
    this._connection = connection;
}

ItemDAO.prototype.getObjetos = function (callback) {
    this._connection.query('select * from itens order by nome ASC', callback);
};
ItemDAO.prototype.getObjeto = function (id, callback) {
    console.log(id);
    this._connection.query('select * from itens where id = ' + id.id, function () {
        _connection.end();
        callback();
    });
};

ItemDAO.prototype.get5LastestBooks = function (callback) {
    this._connection.query('select * from itens order by id desc limit 5', callback);
};
ItemDAO.prototype.deleteBook = function (book, callback) {

};
module.exports = function () {

    return ItemDAO;
};
