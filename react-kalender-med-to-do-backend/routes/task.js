var express = require('express');
var router = express.Router();
const cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {
  //this router prints all tasks (get data from MongoDB)

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

router.post('/add', function(req, res) {
  //this router saves new task into MongoDB

  //hämta?
  let newTask = 
  {
    date: req.body.date,
    title: req.body.title,
    isFinish: false
  };

  req.app.locals.db.collection("taskInfoCollection").insertOne(newTask)
  .then(result => {
    res.json( {"code": "newTask saved", "id" : newTask.id} );
  });

});

module.exports = router;
