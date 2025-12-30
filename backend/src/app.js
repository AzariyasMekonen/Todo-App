import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send("Todo app")
})

export default app;