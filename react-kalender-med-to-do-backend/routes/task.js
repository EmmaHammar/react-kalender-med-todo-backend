var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

router.post('/', function(req, res) {
  //this router saves new task into MongoDB

  // console.log("req.body.id:", req.body.id);

  let newTask = 
  {
    date: req.body.date,
    title: req.body.title,
    isFinish: false,
    id: req.body.id 
  };
  // console.log("newTask:", newTask);


  req.app.locals.db.collection("taskInfoCollection").insertOne(newTask)
  .then(result => {
    res.json( {"code": "newTask saved", "id" : newTask.id} );
  });

});

module.exports = router;
