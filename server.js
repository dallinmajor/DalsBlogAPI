var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MONGODB_URI = require("./config/keys");
var postController = require("./controllers/postController")

var PORT = process.env.PORT || 5000;

mongoose.connect(
    MONGODB_URI || "mongodb://localhost/mern_starter",
    { useNewUrlParser: true }
);

var app = express();

app.use(bodyParser.json({ useNewUrlParser: true }));

app.route('/')
    .get(postController.findAll)

app.route('/:id')
    .get(postController.findById)
    .put(postController.update)
    .delete(postController.delete)



app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
