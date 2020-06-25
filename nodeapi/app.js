const express = require('express')
cosnt app = express()

app.get("/", (req, res) => {
  res.send("Hello world from Node js");
});

app.listen(8080);
