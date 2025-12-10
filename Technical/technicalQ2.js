// Create simple Express server & POSt route

const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());


app.post('/', (req, res) => {
    console.log(req)
      res.send("Hello World! Express server is working");
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//Curl 
// curl -X POST http://localhost:3000 \
//   -H "Content-Type: application/json" \
//   -d '{"name":"gokul"}'