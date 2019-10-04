const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const garmentRoutes = express.Router();
const PORT = 4000;
const resPerPage = 9;

let Garment = require('./models/garment.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/garment_search', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

garmentRoutes.route('/').get(function(req, res) {
    Garment.find()
        .limit(resPerPage)
        .then(function(garments) {
            res.json(garments);
        })
        .catch(function(err) {
            console.log(err);
        })
});

app.use('/garments', garmentRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});