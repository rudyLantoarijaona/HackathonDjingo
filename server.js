//Import dependencies
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Jeu = require('./models/jeu');
var port = process.env.API_PORT || 3000;

var index = require('./routes/index');
var jeux = require('./routes/jeu');
var profil = require('./routes/profil');

var cors = require('cors');

//Init express
var app = express();
var router = express.Router();

//View Engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//Static Folder
app.use(express.static(path.join(__dirname,'angular')));

//Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
 
//Enable CORS
app.use(cors());

 app.use('/', index);
 app.use('/api', jeux);
 app.use('/api', profil);

/*
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});
*/

//Connect to mongoDB server
mongoose.connect('mongodb://localhost:27017/Djingo', function(error, db) {
    if (error) return funcCallback(error);
});
mongoose.set('debug', true);

require('./models/jeu');

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});


app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
