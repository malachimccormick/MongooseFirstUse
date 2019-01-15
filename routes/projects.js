var express = require('express');
var router = express.Router();
const {ProjectModel} = require('../db/schema')

router.get('/', (request, response) => {
  ProjectModel.find({})
    .then((students) => {
      response.send({
        students: students
      })
    })
    .catch((error) => {
      console.log(error)
    })
})



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
