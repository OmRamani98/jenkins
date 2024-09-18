const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

app.get('/', (req, res) => {
  res.send({"message":'Hello World'});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
