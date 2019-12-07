const express = require("express");
const app = express();
const http = require("http").createServer(app);
const port = 3000;

app.use(express.static("public"));

const io = require("socket.io")(http);

io.on("connection", socket => {
  console.log(`${socket.id} connected`);

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

http.listen(port, () => console.log(`server started on port ${port}`));
