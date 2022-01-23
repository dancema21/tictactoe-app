import http from "http";
import handler from "serve-handler";
import nanobuffer from "nanobuffer";
import { Server } from "socket.io";

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: "./frontend",
  });
});

const io = new Server(server, {});

io.on("connection", (socket) => {});

const port = process.env.PORT || 8080;
server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
