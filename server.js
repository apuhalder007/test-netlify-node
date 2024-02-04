const express = require("express");
const port = 3000;

const server = express();
server.get("/", "this app server");

server.listen(port, ()=>{
    console.log(`This server on port ${port}`);
})