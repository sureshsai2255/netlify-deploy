const mongoose = require('mongoose')

const connectDB =async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDBcompass connected on : ${conn.connection.host}`)
    } catch (error) {
        console.log('Error');
        process.exit(1)
    }
}

module.exports={connectDB}