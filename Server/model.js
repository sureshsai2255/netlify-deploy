const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    text:{
        type:String,
        required:[true,'Please add a text value'],
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('Data',dataSchema)