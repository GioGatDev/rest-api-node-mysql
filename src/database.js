const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'empresaapi'
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('DB conectada');
    }
});

module.exports = mysqlConnection;