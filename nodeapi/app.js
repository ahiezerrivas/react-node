const express = require('express')
cosnt app = express()

//bring in routes
const { getPosts } = require('./routes/post')

app.get("/", getPosts);

const port = 8080

app.listen(port, () => {
  console.log(`A Node Js API is listenin on port: ${port}`);
});
