// src/app.js

const express = require('express');

const employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

app.get('/employees/:id', employee.getById);

app.get('/employees', employee.getAll);

module.exports = app;