var mysql = require('mysql')

var con = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'root',
    database    : 'aa'
})

con.connect(function(err) {
    if(err) throw err
    console.log("Server was connected!")
})

module.exports = con