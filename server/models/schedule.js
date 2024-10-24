const {Schema, model} = require('mongoose')

const Schedule = new Schema({
    week: {type: Number},
    faculty: {type: String},
    form_edu: {type: String},
    course: {type: Number},
    group_name: {type: String},
    weekday: {type: Number},
    date: {type: Date, default: '0000-00-00'},
    subject: {type: String, default: null},
    type: {type: String},
    time: {type: Number},
    auditory_name: {type: String},
    teacher_name: {type: String},
    time_start: {type: String},
    time_end: {type: String}
})

module.exports = model('Shedule', Schedule)