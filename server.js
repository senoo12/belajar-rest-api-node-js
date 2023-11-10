const bodyParser = require('body-parser');
const express = require('express');
const app = express(); 

//parse apps
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil router
var routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});