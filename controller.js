'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan!", res);
};

//get data
exports.getDataBiodata = function(req, res){
    connection.query('SELECT * FROM biodata', function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//get data by id
exports.getDataBiodataById = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM biodata WHERE id = ? ', [id],
        function(error, rows, fields){
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
}

//post data
exports.postDataBiodata = function(req, res){
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    var semester = req.body.semester;

    connection.query('INSERT INTO biodata (nama, jurusan, semester) VALUES (?, ?, ?)',
        [nama, jurusan, semester], 
        function(error, rows, fields){
            if (error){
                console.log(error);
            } else {
                response.ok("berhasil menambahkan data!", res);
            }
        });
};

//put data
exports.putDataBiodata = function(req, res){
    var id = req.body.id;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    var semester = req.body.semester;

    connection.query('UPDATE biodata SET nama=?, jurusan=?, semester=? WHERE id=?', [nama, jurusan, semester, id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("berhasil update data", res);
            }
        });
};

//delete data
exports.deleteDataBiodata = function(req, res){
    var id = req.body.id;
    connection.query('DELETE FROM biodata WHERE id=?', [id],
        function(error, rows, fields){
            if (error) {
                console.log(error);
            } else {
                response.ok("berhasil delete!", res);
            }
        }
    )
}