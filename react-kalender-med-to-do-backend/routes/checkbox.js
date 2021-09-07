var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

router.post('/', function(req, res) {
  //this router updates checkbox boolean when checked
  console.log("req.body.id", req.body.id);
  console.log("req.body.isFinish", req.body.isFinish);

  //INGET HÄNDER -VARFÖR??
  req.app.locals.db.collection("taskInfoCollection").updateOne( {"id" : req.body.id}, {$set: {"isFinish" : req.body.isFinish} })
  .then(result => {
    res.json( {"code": "updateTask", "updateTaskId": req.body.id} );
  });
  // res.json( {"code": "updateTask"} );


});

module.exports = router;
