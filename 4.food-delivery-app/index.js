
// Step 1: Import express.
const express = require("express");

// Step 2: Create server and listen.
const server = express();
server.listen(4400);

// Step 3: Create default response.
server.get("/", (req, res)=>{
    res.end("Hello world from express");
});

console.log("Server is listen on 4400");