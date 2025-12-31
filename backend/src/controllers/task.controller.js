import Task from '../models/task.model.js';

export const createTask = async (req, res) => {
    try {
        const{task} = req.body;
        
        const newTask = new Task({
            task
        })

        await newTask.save();

        res.status(201).json({
            message: "Task created successfully",
            newTask
        })
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

export const getTasks = async (req, res) => {
    try {
        const Tasks = await Task.find();
        res.json({Tasks})
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

export const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({message: "Task not found"})
        res.json(task)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

export const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {task} = req.body;

        const updatedTask = await Task.findByIdAndUpdate(id, task, {new: true});

        if (!updatedTask) return res.status(404).json({message: "task not found"});

        res.status(200).json({
            message: "Task updated successfully",
            updatedTask
        });
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
    
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask)  return res.status(404).json({message: "Task not found"})
        res.json('Task deleted successfully')
    }
    catch(err){
        res.status(400).json({message: err.message})
    }
}