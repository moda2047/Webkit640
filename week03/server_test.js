const express = require("express");
const app = express();
const http = require("http");
const port = 3000;

app.get("/", function (req, res) {
  console.log("요청 들어옴");
  res.end("hello world");
});

app.get("/home", function (req, res) {
  console.log("서버에 홈요청 들어옴");
  res.end("home page");
});

const server = http.createServer(app);
server.listen(port, function () {
  console.log("서버 실해 중 : httpL//localhost:" + port);
});
