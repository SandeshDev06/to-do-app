const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn Git" },
  { id: 2, task: "Build Todo App" }
];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = { id: Date.now(), task: req.body.task };
  todos.push(newTodo);
  res.json(newTodo);
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});