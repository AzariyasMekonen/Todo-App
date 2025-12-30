import express from 'express';
import router from '../routes/task.route.js';

const app = express()
app.use(express.json());

app.use('/tasks', router)

export default app;