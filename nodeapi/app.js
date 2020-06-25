const express = require('express')
cosnt app = express()

//bring in routes
const postRoutes = require('routes/post')

app.get("/");

const port = 8080

app.listen(port, () => {
  console.log(`A Node Js API is listenin on port: ${port}`);
});
