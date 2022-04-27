// const { application } = require("express");
const express = require("express");

// create express server
const server = express();
const PORT = 3000;

//make server listen
server.listen(PORT, () => {
  console.log("Server listening...");
});

server.get("/Mannie", (req, res) => {
  res.send("<h1>Hi Mannie</h1>");
});
