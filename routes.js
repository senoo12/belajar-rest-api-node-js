'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/biodata')
        .get(jsonku.getDataBiodata);

    app.route('/biodata/:id')
        .get(jsonku.getDataBiodataById);

    app.route('/add')
        .post(jsonku.postDataBiodata);

    app.route('/update')
        .put(jsonku.putDataBiodata);
    
    app.route('/delete/:id')
        .delete(jsonku.deleteDataBiodata);
};