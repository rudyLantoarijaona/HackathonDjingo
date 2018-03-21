'use strict';
//import dependency
var mongoose = require('mongoose');
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
var jeuxSchema = new mongoose.Schema({
  id : Number,
  nom : String,
  regle : String,
  joueurMin : Number,
  joueurMax : Number,
  ageJoueurMin : Number,
  ageJoueurMax : Number,
  duree : { type : Date, default : Date.now }
});
//export our module to use in server.js
module.exports = mongoose.model('Jeu', jeuxSchema);

