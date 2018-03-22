var express = require('express');
var router = express.Router();

/*router.get('/jeu',function(req, res, next){
	 db.collection("jeux").find().toArray(function (error, results) {
        if (error) throw error;
            console.log( "nom : "  + results[0].nom );
    });
});*/

router.get('/',function(req,res,next){
	res.render('index.html');	
});



module.exports = router;