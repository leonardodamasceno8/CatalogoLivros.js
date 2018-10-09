var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: '35.190.135.93',
        user: 'root',
        password: 'cmsserverv6',
        database: '1010gps',
        port: '3321'
    });
};

module.exports = function(){
    return connMySQL;
};
