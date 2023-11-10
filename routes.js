'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/biodata')
        .get(jsonku.getDataBiodata);

    app.route('/biodata/:id')
        .get(jsonku.getDataBiodataById);
};