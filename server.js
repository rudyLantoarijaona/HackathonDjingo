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
 

 app.use('/', index);
 app.use('/api', jeux);
 app.use('/api', profil);
//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});

//Connect to mongoDB server
mongoose.connect('mongodb://localhost:27017/Djingo', function(error, db) {
    if (error) return funcCallback(error);

   
var objNew = { nom : 'JohnDoeGame' ,  regle : 'http://google.fr/' , joueurMin : '1' , joueurMax : '4' ,  ageJoueurMin : '5' , ageJoueurMax : '18' };  

/*db.collection("jeux").insert(objNew, null, function (error, results) {
    if (error) throw error;
    console.log("Le document a bien été inséré");    
});
*/
    db.collection("jeux").find().toArray(function (error, results) {
        if (error) throw error;
            console.log( "nom : "  + results[0].nom );
    });
});

mongoose.set('debug', true);

require('./models/jeu');

router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});


app.listen(port, function() {
 console.log(`api running on port ${port}`);
});




router.route('/jeu')
 //retrieve all quotes from the database
 .get(function(req, res) {
 //looks at our Quote Schema
 Jeu.find(function(err, jeux) {
 if (err)
   res.send(err);
   //responds with a json object of our database quotes.
   res.json(jeux)
   });
 })
 //post new quote to the database
 .post(function(req, res) {
 var jeu = new Jeu();
 //body parser lets us use the req.body
 jeu.name = req.body.name;
 jeu.quote = req.body.quote;
jeu.save(function(err) {
 if (err)
   res.send(err);
   res.json({ message: 'Jeu ajouté avec succès !' });
   });
 });




 
// Création du Model pour les jeux
//var JeuxModel = mongoose.model('jeux', jeuxSchema);
 
// On crée une instance du Model
//var monJeu = new JeuxModel({ id : '1' },{ nom : 'JohnDoeGame' },{ regle : 'http://google.fr/' },{ joueurMin : '1' },
	//{ joueurMax : '4' }, { ageJoueurMin : '5' }, { ageJoueurMax : '18' } );
/*monCommentaire.contenu = 'Salut, super article sur Mongoose !';*/
 
// On le sauvegarde dans MongoDB !
//monJeu.save(function (err) {
  //if (err) { throw err; }
  //console.log('Jeu ajouté avec succès !');
  // On se déconnecte de MongoDB maintenant
  //mongoose.connection.close();
//});*/