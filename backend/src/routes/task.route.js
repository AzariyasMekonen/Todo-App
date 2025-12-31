import { createTask, getTasks, getTask,updateTask, deleteTask} from '../controllers/task.controller.js'
import express from 'express'

const router = express.Router()

router.post('/', createTask)
router.get('/', getTasks)
router.get('/:id', getTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router;