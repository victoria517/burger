var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs= require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var router = require('../burger/controllers/burgers_controllers.js');

app.use(router);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

// var burgers = [
//     { burger_name: 'Cheeseburger', devoured: "true"},
//     { burger_name: 'Big Mac', devoured: 'false'},
//     { burger_name: 'Veggie Burger', devoured: 'false'}
// ];

// app.get('/burgers/:burger_name',function(req, res){
//     for (var i = 0; i < burgers.length; i++) {
//         if (burgers[i].burger_name === req.params.name) {
//             return res.render('burgers', burgers[i]);
//         }
//     }
// });
// // app.get('/burgers', function (res, req) {
// //     res.render()
