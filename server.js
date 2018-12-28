var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const MONGODB_URI = require("./config/keys");

const PORT = process.env.PORT || 5000;

mongoose.connect(
    MONGODB_URI || "mongodb://localhost/mern_starter",
    { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json({ useNewUrlParser: true }));



app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
