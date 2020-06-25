const express = require('express')
cosnt app = express()

app.get("/", (req, res) => {
  res.send("Hello world from Node js");
});

const port = 8080

app.listen(port, () => {
  console.log(`A Node Js API is listenin on port: ${port}`);
});
