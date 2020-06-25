const express = require('express')
cosnt app = express()

app.get("/");

const port = 8080

app.listen(port, () => {
  console.log(`A Node Js API is listenin on port: ${port}`);
});
