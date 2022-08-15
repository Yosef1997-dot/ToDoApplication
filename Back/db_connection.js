const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI =`mongodb+srv://YossefKenig97:${process.env.PASSWORD}@cluster0.95t50.mongodb.net/github_projects_data?retryWrites=true&w=majority` 


const connectDB  = async ()  =>{
    try{
        const con = await mongoose.connect(MONGO_URI,{
            useNewUrlParser: true
        })
        console.log(`MongoDB connected : ${con.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

connectDB()
module.exports = connectDB