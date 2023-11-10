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