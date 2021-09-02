var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.locals.db.collection('taskInfoCollection').find().toArray()
  .then(results => {
    let printTasks="<div><h2>Alla mina tasks</h2><ul>"
    
    for (task in results) {
      printTasks += "<li>" + results[task].date + " | " + results[task].title + " | " + results[task].isFinish + "</li>";
    }

    printTasks += "</ul></div"
    console.log("printTasks", printTasks);

    res.send([printTasks])
    
  });
});


module.exports = router;
