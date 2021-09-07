var express = require('express');
var router = express.Router();
const cors = require('cors');
var mongodb = require('mongodb');
ObjectId = require('mongodb').ObjectID;

router.use(cors());

router.post('/', function(req, res) {
  //this router updates checkbox boolean when checked
  console.log("req.body.id", req.body.id);
  console.log("req.body.id", req.body.id);

  console.log("req.body.isFinish", req.body.isFinish);
  // console.log("matcha obj id", 'ObjectId("'+(req.body.id)+'")' );
  console.log("objid", mongodb.ObjectId(req.body.id));

  //uppdaterar isFinish:
  // req.app.locals.db.collection("taskInfoCollection").updateOne( {"_id" : mongodb.ObjectId(req.body.id) }, {$set: {"isFinish" : req.body.isFinish} })
  // .then(result => {
  //   // console.log("result", result);
  //   res.json( {"code": "updateTask", "updateTaskId": req.body.id} );
  // });

  req.app.locals.db.collection("taskInfoCollection").remove( {"_id" : mongodb.ObjectId(req.body.id)} )
  .then(result => {
    // console.log("result", result);
    res.json( {"code": "updateTask", "updateTaskId": req.body.id} );
  });

});

module.exports = router;
