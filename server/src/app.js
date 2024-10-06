import cors from 'cors';

const express = require('express');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello from server' });
});

app.get('/health-check', (req, res, _next) => {
  res.json({ status: 'OK' });
});

app.get('/message', (req, res, _next) => {
  if (req.query.auth === '1234567890') {
    res.json({ message: 'Hello World 👋' });
  } else {
    res.status(401).json('You are not authorized to view this message');
  }
});

export default app;
