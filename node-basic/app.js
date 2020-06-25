const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("hey whats up from express ")
})

app.listen(3000);