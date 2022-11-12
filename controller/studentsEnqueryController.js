const studentModel = require('../schema/studentSchema')
const subscribeModel = require('../schema/subscribeModel')

const studentEnqueryPost = async (req, res) => {
    const data = new studentModel(req.body)
    //     {
    //     studentName: req.body.studentName,
    //     phone: req.body.phone,
    //     studentCourses: req.body.studentCourses,
    //     studentQuery: req.body.studentQuery,
    //     studentCity: req.body.studentCity,
    //     timestamps: true,
    // }
    try {
        const dataToSave = await data.save();
        res.status(200).json({message: "Data Save Successfully", dataToSave })
    }
    catch (error) {
        res.status(400).json({ message: error.message, status: "Something Error" })
    }
}

const studentsGetAll = async (req, res) => {
    try {
        const data = await studentModel.find();
        if (data) {
            res.json(data)
        } else {
            res.status(404).json({ message: 'No Record Found' })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const studentGetById = async (req, res) => {
    try {
        const data = await studentModel.findById(req.params.id);
        if (data) {
            res.json(data)
        } else {
            res.status(404).json({ message: 'Student not found' })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const updateStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await studentModel.findByIdAndUpdate(
            id, updatedData, options
        )

        if (result) {
            res.send(result)
        } else {
            res.status(404).json({ message: 'Student not found' })
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const deleteStudentById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await studentModel.findByIdAndDelete(id)
        if (result) {
            res.send(`In the Documents ${result.studentName} has been deleted successfully`)
        } else {
            res.status(404).json({ message: 'Student not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { studentEnqueryPost, studentsGetAll, studentGetById, updateStudentById, deleteStudentById }














// const sendDataToPost = async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
// }

// const getAllStudents = async (req, res) => {
//     try{
//         const data = await Model.find();
//         res.json(data)
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// }


// module.exports = getAllStudents
// module.exports = sendDataToPost