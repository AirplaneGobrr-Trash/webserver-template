// Nodejs Moudles
const path = require("path")

// Express
const express = require('express');
const app = express();

// Http
const http = require('http');
const server = http.createServer(app);

// Socket.io
const { Server } = require("socket.io");
const io = new Server(server);

// Express addons

app.use("/public", express.static(path.join(__dirname, "..", "public")));

// Body-parser
app.use(require("body-parser").json({ limit: "5mb" }));

// Cookies
app.use(require("cookie-parser")("password", {}));

// Cors
app.use(require("cors")({ credentials: true }));

// Handlebars
const { engine } = require("express-handlebars");
app.engine("handlebars", engine({ defaultLayout: false })); // Disables layouts stuff
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "..", "views"));

module.exports = {
    express, app, server, io
}