var session = require('express-session');
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(session({secret: 'codingdojorocks'}));  // string for encryption
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render("index");
});
app.get('/', function (req, res) {
    
    res.render("index");
});


// post route for adding a user
app.post('/result', function (req, res) {
    obj = {
        name:req.body.name,
        loc:req.body.loc,
        lang:req.body.lang,
        com:req.body.com,
    };
    res.render('result', {result:obj});
});


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
