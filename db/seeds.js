require('dotenv').config();
const mongoose = require('mongoose')
//mongoose.connect(process.env.MONGODB_URI)
const {ProjectModel} = require('./schema')
const {StudentModel} = require('./schema')

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true})
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })

    const project1 = new ProjectModel({
        projectName: 'Project1',
        unit: 'Mongoose'
    })
    
      const project2 = new ProjectModel({
          projectName: 'Project2',
          unit: 'Mongoose'
      })

  const student1 = new StudentModel({
          name: 'Devan',
          gradeAverage: 'B',
          projects: [project1, project2]
      })
       const student2 = new StudentModel({
          name: 'Chippy',
          gradeAverage: 'B',
          projects: [project1, project2] //make sure to place in array form not object
      })
    //    const student3 = new StudentModel({
    //       name: 'Carl',
    //       gradeAverage: 'B',
    //       projects: {project1, project2}
    //   })

     const projects = [project1, project2]
     const students = [student1, student2]

     StudentModel.remove()
         .then(() => ProjectModel.deleteMany())
         .then(() => StudentModel.insertMany(students))
         .then(() => ProjectModel.insertMany(projects))
         .then(() => mongoose.connection.close())
