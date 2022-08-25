const express  = require('express')
const app = express()
const connectDB = require('./db_connection')
const Router = require('./routes')

connectDB()

app.use(express.json())
app.use(Router)

app.listen(3000, () => {
    console.log(`Server is running at port ${3000}`);
})