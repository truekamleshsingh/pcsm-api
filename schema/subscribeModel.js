const { default: mongoose } = require("mongoose");


const subscribeModel = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('subscribers', subscribeModel)