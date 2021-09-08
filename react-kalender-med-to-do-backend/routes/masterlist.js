var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

router.get('/', function(req, res, next) {
    //this router gets all task data from MongoDB)
  
    req.app.locals.db.collection('taskInfoCollection').find().toArray()
    .then(results => {
      console.log("masterResults", results);
  
      res.send(results)
      
    });
  });

module.exports = router;
