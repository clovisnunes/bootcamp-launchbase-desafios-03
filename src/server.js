var nunjucks = require('nunjucks');

var express = require('express');
var app = express();

const dataAbout = require('./dataAbout');
const dataCourses = require('./dataCourses');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('layout.njk');
});

app.get('/sobre', function (req, res) {
    res.render('./pages/sobre/about.njk', dataAbout);
});

app.get('/conteudos', function (req, res) {
    res.render('./pages/conteudos/courses.njk', {data: dataCourses});
});

app.get("/courses/:id", function(req, res) {
    const id = req.params.id;
    const courseinfo = dataCourses.find((course) => course.id == id);
  
    res.render('./pages/conteudos/course-info.njk', courseinfo);
});

app.use(function(req, res) {
    res.status(404).render("not-found.njk");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});