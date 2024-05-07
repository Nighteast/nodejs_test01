const express = require('express');
const cors = require('cors');
const mainRoutes = require('./routes/MainRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(mainRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
