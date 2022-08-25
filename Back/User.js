const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
    },
    lastLog:{
        type:Date,
        default:Date.now()
    },
    token:{
        type: String,
        select:false
    } 
})

module.exports= mongoose.model('User',userSchema)
