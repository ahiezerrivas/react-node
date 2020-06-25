// const express = require("express")
// const app = express()

// app.get('/', (req, res) => {
//     res.send("hey whats up from express ")
// })

// app.listen(3000);

const fs = require('fs')
const fileName = "txt.txt"

fs.readFile(fileName, (err, data) => {
    if(err) {
      console.log(err)
    }
  console.log(data)
})

console.log('Node js async programing');
