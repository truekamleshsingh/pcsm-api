const subscribeModel = require('../schema/subscribeModel.js')


const subscribePost = async (req, res) => {
    const data = new subscribeModel(req.body)
    try {
        const isSubscriber = subscribeModel.findOne({ email: req.body.email })
        if (isSubscriber) {
            res.status(202).json({ message: "Already subscriber"})
        } else {
            const result = await data.save()
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const getAllSubscriber = async (req, res) => {
    try {
        const result = await subscribeModel.find()
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ message: 'No subscribers found.' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const subscribeGetById = async (req, res) => {
    try {
        const data = await subscribeModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const subscriberDeleteById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await subscribeModel.findByIdAndDelete(id)
        if (result) {
            res.status(200).json({ messages: `In the Documents ${result.email} has been deleted successfully` })
        } else {
            res.status(404).json({ message: `Subscriber email not found` })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { subscribePost, getAllSubscriber, subscribeGetById, subscriberDeleteById }