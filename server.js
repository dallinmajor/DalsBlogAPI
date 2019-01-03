var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var API_KEY = require('./config/keys')
// var MONGODB_URI = require("./config/db");
var postController = require("./controllers/postController")

var PORT = process.env.PORT || 5000;
var KEY = process.env.API_KEY;

mongoose.connect(
    process.env.PROD_MONGODB,
    { useNewUrlParser: true }
);

var app = express();

app.use(bodyParser.json({ useNewUrlParser: true }));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.route('/')
    .get(postController.findAll)

app.route('/' + KEY)
    .post(postController.create);

app.route('/:id/' + KEY)
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.remove);



app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
