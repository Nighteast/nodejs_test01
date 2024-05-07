const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js server!'});
});

app.get('/test/message1', (req, res) => {
  res.json({testMessage1: 'testMessage1 response'});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
