var session = require('express-session');
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(session({ secret: 'codingdojorocks' }));  // string for encryption
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// root route to render the index.ejs view
app.get('/', function (req, res) {
    if (req.session.count || req.session.count == 0) {
        req.session.count++
    }
    else {
        req.session.count = 0;
    }
    res.render("index", { count: req.session.count });
});
app.get('/click', function (req, res) {
    // req.session.count +=1;
    res.redirect("/");
});
app.get('/click2', function (req, res) {
    req.session.count += 1;
    res.redirect("/");
});
app.get('/reset', function (req, res) {
    req.session.destroy();
    res.redirect("/");
});


// post route for adding a user
// app.post('/users', function (req, res) {
//     console.log("POST DATA", req.body);
//     // This is where we would add the user to the database
//     // Then redirect to the root route
//     res.redirect('/');
// });


// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
