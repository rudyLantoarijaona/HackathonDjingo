var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/*var db = mongoose.connect('mongodb://localhost:27017/Djingo');*/

//Get * Games
router.get('/jeu',function(req,res,next){	
	mongoose.connect('mongodb://localhost:27017/Djingo', function(error, db) {
    if (error) return funcCallback(error);

    db.collection("jeux").find().toArray(function (error, results) {
        if (error) throw error;
            res.json(results);
    	});
	});
});

// Get Game

router.get('/jeu/:id',function(req,res,next){	
	mongoose.connect('mongodb://localhost:27017/Djingo', function(error, db) {
    if (error) return funcCallback(error);

    db.collection("jeux").findOne({_id: mongoose.Types.ObjectId(req.params.id)}).toArray(function (error, result) {
        if (error) throw error;
            res.json(result);
    	});
	});
});
module.exports = router;


