var express = require('express');
var router = express.Router();

const {StudentModel} = require('../db/schema')

router.get('/', (request, response) => {
  StudentModel.find({})
    .then((students) => {
      response.send({
        students: students
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:studentId', (request, response) => {
  const studentId= request.params.studentId

  StudentModel.findById(studentId)
    .then((students) => {
      response.send({
        students: students
      })
    })
   
})

router.put('/:studentId', (request, response) => {
  const studentId = request.params.studentId
  const updateStudent= request.body
  

  StudentModel.findOneAndUpdate({_id:studentId},updateStudent, {new:true})
    .then((student) => {
      console.log(`${student.name} updated!`)
      response.send({
        // students: student
      })
    })

})
module.exports = router

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
