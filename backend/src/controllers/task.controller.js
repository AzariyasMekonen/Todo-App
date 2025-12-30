import Task from '../models/task.model.js';
import Task from '../models/task.model.js';

exports.createTask = async (req, res) => {
    try {
        const{task} = req.body;
        
        const Task = new Task({
            task
        })

        await Task.save();

        res.status(201).json({
            message: "Task created successfully",
            Task
        })
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

exports.getTasks = async (req, res) => {
    try {
        const Tasks = Task.find();
        res.json(Tasks)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

exports.getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = Task.findById(id);
        if (!task) return res.status(404).json({message: "Task not found"})
        res.json(task)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

exports.updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {task} = req.body;

        const Task = await Task.findByIdAndUpdate(id, task, {new: true});

        if (!task) return res.status(404).json({message: "task not found"});

        res.status(200).json({
            message: "Task updated successfully",
            Task
        });
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
    
        const Task = await Task.findByIdAndDelete(id);

        if (!task)  return res.status(404).json({message: "Task not found"})
        res.json('Task deleted successfully')
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}