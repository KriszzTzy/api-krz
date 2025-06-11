const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Kriszz API!');
});

app.listen(3000, () => {
  console.log('API aktif di port 3000');
});
