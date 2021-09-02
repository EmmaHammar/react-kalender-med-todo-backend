var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('välkommen till userrouter');
});

router.post('/newTask', function(req, res) {
  //This router add new task to Mongodb

  //Hämta MongoDB
  // req.app.locals.db.collection("")

  let newTask = 
  {
    date: "2021-11-17T08:00:00.000+00:00",
    title: "träna",
    isFinish: false
  };
  //Test insert new document
  db.collection('taskInfoCollection').insertOne(newTask)
  .then(result => {
    // process result
    res.json( {"code": "newTask saved", "id" : newTask.id} );
  });
});

module.exports = router;
