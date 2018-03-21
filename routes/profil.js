var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/*var db = mongoose.connect('mongodb://localhost:27017/Djingo');*/

router.get('/profil',function(req,res,next){	
	mongoose.connect('mongodb://localhost:27017/Djingo', function(error, db) {
    if (error) return funcCallback(error);

    db.collection("profil").find().toArray(function (error, results) {
        if (error) throw error;
            res.json(results);
    	});
	});
});

module.exports = router;


