var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection('taskInfoCollection').find().toArray()
  .then(results => {
    let printTasks="<div><h2>Våra tasks</h2>"
    
    for (task in results) {
      printTasks += "<div>" + results[task].title;
    }

    printTasks += "</div"

    res.send(printTasks)
  });
});


module.exports = router;
