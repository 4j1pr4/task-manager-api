const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {res.json(tasks);
});

app.post('/tasks', (req, res) => {const task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    status: 'todo'
};
tasks.push(task);
res.json(task);
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});