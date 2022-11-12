const franchiseeModel = require('../schema/franchiseeSchema.js')


///////     POST
const franchiseeEnqueryPost = async (req, res) => {
    try {
        // const newFranchisee = new franchiseeModel(req.body)   ///////    its also write syntax
        const newFranchisee = new franchiseeModel({
            studyCenterName: req.body.studyCenterName,
            pinCode: req.body.pinCode,
            centerHead: req.body.centerHead,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            address: {
                state: req.body.address.state,
                district: req.body.address.district,
                tehsil: req.body.address.tehsil,
                block: req.body.address.block,
            },
            message: req.body.message,
        })
        const result = await newFranchisee.save();
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: 'Something Happening Error' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


///////////////     GET ALL
const getAllFranchisee = async (req, res) => {
    try {
        const franchisee = await franchiseeModel.find()
        if (franchisee) {
            res.status(200).json(franchisee)
        } else {
            res.status(404).json({ message: 'No Franchisee Record Found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



///////////  GET ONE

const getByIdFranchiseeEnquery = async (req, res) => {
    try {
        const franchisee = await franchiseeModel.findById(req.params.id)
        if (franchisee) {
            res.status(200).json(franchisee)
        } else {
            res.status(404).json({ message: 'No Franchisee Record Found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



///////////////  UPDATE
const updateFranchiseeEnquery = async (req, res) => {
    try {
        const franchisee = await franchiseeModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (franchisee) {
            res.status(200).json(franchisee)
        } else {
            res.status(404).json({ message: 'No Franchisee Record Found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



/////////// DELETE
const deleteFranchiseeById = async (req, res) => {
    try {
        const result = await franchiseeModel.findByIdAndDelete(req.params.id)
        if (result) {
            res.status(200).json({ message: `Deleted Successfully` })
        } else {
            res.status(404).json({ message: "Franchisee Not Found" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { franchiseeEnqueryPost, deleteFranchiseeById, getAllFranchisee, updateFranchiseeEnquery, getByIdFranchiseeEnquery }