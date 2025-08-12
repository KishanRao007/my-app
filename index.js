const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Docker + ECS via GitHub!' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on port ${port}`);
});


