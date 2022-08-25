const express = require('express')
const router = express()
const taskModel = require('./Task')

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await taskModel.find()
        res.send(tasks)
    } catch (error) {
        res.send('Error:' + error)
    }
})

router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id)
        res.send(task)
    } catch (error) {
        res.send('Error:' + error)
    }
})

router.post('/add_task', async (req, res) => {
    const newTask = new taskModel(req.body)
    try {
        const t1 = await newTask.save()
        res.send(t1)
    } catch (error) {
        res.send('Error:' + error)
    }
})

router.put('/tasks/update/:id', async (req, res) => {

    try {
        await taskModel.findByIdAndUpdate(req.params.id, req.body)
        const updatedTask = await taskModel.findById(req.params.id)
        res.send(updatedTask)
    } catch (error) {
        res.send('Error:' + error)
    }

})


router.delete('/tasks/delete/:id', async (req, res) => {
    try {
        const deletedTask = await taskModel.findByIdAndDelete(req.params.id)
        res.send(deletedTask)
    } catch (error) {
        res.send('Error:' + error)
    }

})



module.exports = router



