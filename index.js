const path = require('path');
const express = require('express');

const app = new express();
console.log('I am running!');

app.set('port', process.env.PORT || 4000);

app.use('/scripts', express.static('./scripts/'));
app.use(express.static("public"));

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var prospectos = require('./views/prospecto');

app.use('/prospectos', prospectos);

app.listen(app.get('port'), () => {
  console.log('Puerto:' + app.get('port'))
});