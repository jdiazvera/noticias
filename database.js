const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'noticias',
    password: 'noticias',
    database: 'noticias'
});

connection.connect(function(err){
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

$query = 'SELECT * FROM `myTableName` LIMIT 10';

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        console.log(err);
        return;
    }

    console.log("Query succesfully executed", rows);
});

connection.end(function(){
    // The connection has been closed
});