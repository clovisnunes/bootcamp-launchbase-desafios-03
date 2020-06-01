var nunjucks = require('nunjucks');

var express = require('express');
var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('layout.njk');
});

app.get('/sobre', function (req, res) {
    res.render('./pages/sobre/about.njk');
});

app.get('/conteudos', function (req, res) {
    res.render('./pages/conteudos/courses.njk');
});

app.use(function(req, res) {
    res.status(404).render("not-found.njk");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});