const express = require("express");
const app = express();
const http = require("http").createServer(app);
const port = 3000;

app.use(express.static("public"));
 
app.get("/:dir", (req, res) => {return res.sendFile(`${__dirname}/public${req.path}.html`)});

const io = require("socket.io")(http);

io.on("connection", socket => {
  console.log(`${socket.id} connected`);

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

http.listen(port, () => console.log(`server started on port ${port}`));
