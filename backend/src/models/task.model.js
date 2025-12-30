import mongoose from 'mongoose';

const task = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('task', task)

export default Task;