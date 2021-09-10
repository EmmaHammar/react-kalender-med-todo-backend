var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

router.get('/', function(req, res, next) {
    //this router gets all task data from MongoDB)
  
    // req.app.locals.db.collection('taskInfoCollection').find().toArray()
    req.app.locals.db.collection('taskInfoCollection').find().sort({date:1}).toArray()

    .then(results => {
      console.log("masterResults", results);

      console.log("results är sorterat??", results); 
      res.send(results)
      
    });
  });

module.exports = router;
