import { Router } from 'express';
const routes = new Router();

routes.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js server!'});
});

routes.get('/test/message1', (req, res) => {
  res.json({testMessage1: 'testMessage1 response'});
});

module.exports = routes;
