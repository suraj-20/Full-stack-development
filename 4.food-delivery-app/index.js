
// Step 1: Import express.
const express = require("express");
const routes = require("./src/user/routes/user")

// Step 2: Create server and listen.
const server = express();
server.listen(4400);

// Configure Routes.
server.use("/api/user", routes);

// Step 3: Create default response.
server.get("/", (req, res)=>{
    res.end("Hello world from express");
});

console.log("Server is listen on 4400");