// require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const Schema = mongoose.Schema

var ProjectSchema = new Schema({
    projectName: String,
    unit: String
});
var StudentSchema = new Schema({
    name: String,
    gradeAverage: String,
    projects: [ProjectSchema]
});


const ProjectModel = mongoose.model('Project', ProjectSchema)

const StudentModel = mongoose.model('Student', StudentSchema)
module.exports = { ProjectModel, StudentModel } 