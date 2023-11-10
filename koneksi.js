const mysql = require('mysql');

//koneksi database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_belajar_rest_api'
});

conn.connect((err)=>{
    if (err) throw err; 
    console.log('Mysql terkoneksi');
});

module.exports = conn;