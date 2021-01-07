const express = require("express");
const bodyParser = require("body-parser");


const PORT = process.env.PORT | 3001;

let app = express();

app.use(bodyParser.json());

app.listen(PORT);

console.log("Running in port: "+PORT);

