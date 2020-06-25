const fs = require('fs')
const fileName = "txt.txt"

const errHandler = err => console.log(err);

const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if(err)  errHandler(err)
    dataHandler(data);
})

console.log('Node js async programing');
