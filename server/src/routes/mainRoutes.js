const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js server!' });
});

router.get('/test/message1', (req, res) => {
    res.json({ testMessage1: 'testMessage1 response' });
});

module.exports = router;