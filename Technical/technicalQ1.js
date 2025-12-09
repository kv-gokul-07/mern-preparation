// Create simple Express server & GET route

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req)
      res.send("Hello World! Express server is working");
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});