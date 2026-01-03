import mongoose from 'mongoose';

const task = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed : {
        type: Boolean,
        default: false
    }
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('task', task)

export default Task;