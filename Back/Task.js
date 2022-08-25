const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: Boolean,
        default: false
    },
    deadline: {
        type: Date
    },
    contactList: [String]
})


module.exports = mongoose.model('Task', taskSchema)
