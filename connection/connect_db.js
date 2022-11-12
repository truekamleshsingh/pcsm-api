const { default: mongoose } = require("mongoose")


const Connection = async (mongo_db_url) => {
    
    try {
        await mongoose.connect(mongo_db_url)
        console.log('Database Connected Successfully.')
        
    } catch (error) {
        console.log('Error while connecting Database')
    }
    
    // mongoose.connect(mongo_db_url)
    // const database = mongoose.connection
    // database.once('error', error => {
    //     console.log('Error while connection database ', error)
    // })
    // database.once('connected', () => {
    //     console.log('Database Connected Successfully')
    // })
}

module.exports = Connection
