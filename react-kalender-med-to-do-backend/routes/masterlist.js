var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

router.post('/', function(req, res) {
    //this router owns all data from MongoDB
    
  
    req.app.locals.db.collection('taskInfoCollection').find().toArray()
    .then(results => {
      console.log("whole db results", results);
  
      res.send([results])
      
    });
  });

module.exports = router;
