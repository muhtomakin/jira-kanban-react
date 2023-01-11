const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [
  {
    id: nanoid(),
    title: 'todo 1',
    situation: 'OPEN',
    priority: 'BUG',
  },
  {
    id: nanoid(),
    title: 'todo 2',
    situation: 'TODO',
    priority: 'URGENT',
  },
  {
    id: nanoid(),
    title: 'todo 3',
    situation: 'OPEN',
    priority: 'LIGHT',
  },
  {
    id: nanoid(),
    title: 'todo 4',
    situation: 'DONE',
    priority: 'BUG',
  },
];

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
  const todo = { 
    title: req.body.query.title, 
    id: nanoid(), 
    situation: 'OPEN', 
    priority: req.body.query.priority,
  };
  todos.push(todo);
  return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
  const id = String(req.params.id);
  const index = todos.findIndex(todo => todo.id === id);
  //console.log(req.body.query.title)
  const title = String(req.body.query.title);
  const priority = String(req.body.query.priority);
  const situation = String(req.body.query.situation);
  console.log(todos[index])
  if (index !== -1) {
    todos[index].title = title;
    todos[index].priority = priority;
    todos[index].situation = situation;
  }
  console.log(todos[index])
  return res.json(todos[index]);
});

app.patch('/todos/:id/:situation', (req, res) => {
  const id = req.params.id;
  const situation = req.params.situation;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index !== -1) {
    todos[index].situation = situation;
  }
  return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

app.get('/todos/clear', (req, res) => {
  todos = todos.filter((todo) => todo.completed === false);
  return res.send(todos);
})

const PORT = 2000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));