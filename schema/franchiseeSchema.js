const mongoose = require('mongoose')

const franchiseeModel = new mongoose.Schema({
    studyCenterName: {
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    },
    centerHead: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: true,
    },
    address: {
        state: {
            type: String,
        },
        district: {
            type: String,
        },
        tehsil: {
            type: String,
        },
        block: {
            type: String,
        }
    },
    message: {
        type: String,
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Franchisee', franchiseeModel)