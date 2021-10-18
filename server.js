const faker = require("faker");
const { request } = require("express");
const express = require("express");
//const config = require("config");
const jwt = require("jsonwebtoken");
const server = express();
const morgan = require("morgan");
const Route = require("./src/Routers/index");
const port = 8080;
server.listen(port);
server.use(morgan("dev"));
server.use(express.json());
//server.set("llave", config.llave);

server.use("/", Route);
