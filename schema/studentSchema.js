const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({ type : String})

const studentSchema = new mongoose.Schema({
    studentName : {
        type: String,
        required: true,
    },

    phone : {
        type: Number,
        required: true,
    },

    studentCourses : {
        type: Array,
        
    },

    studentQuery : {
        type : String,
    },

    studentCity : {
        type : String,
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Students', studentSchema)