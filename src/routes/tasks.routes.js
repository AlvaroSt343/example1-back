const express = require('express');
const task = require('../models/task');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const tasks = await Task.findById(req.params.id);
    res.json(tasks);
});


router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'tarea guardada' });
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    console.log(req.params.id);
    res.json({ status: 'tarea actualziada' });
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    console.log(req.params.id);
    res.json({ status: 'tarea eliminada' });
});

module.exports = router;