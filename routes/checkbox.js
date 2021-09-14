// var express = require('express');
// var router = express.Router();
// const cors = require('cors');
// // var mongodb = require('mongodb');
// // ObjectId = require('mongodb').ObjectID;

// router.use(cors());

// router.post('/', function(req, res) {
//   // console.log("req.body.id - ja detta klickade id-et", req.body.id);

//   req.app.locals.db.collection("taskInfoCollection").deleteOne( {id : req.body.id} )
//   .then(result => {
//     // console.log("result", result);
//     res.json( {"code": "delete Task", "deletedTaskId": req.body.id} );
//   });

// });

// module.exports = router;
