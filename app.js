const express = require('express');
const path = require('path');

const authRouter = require('./routes/auth');
const homeRouter = require('./routes/home');
const blogRouter = require('./routes/blog');

const server = express();
server.use(express.static(path.join(__dirname)));

server.use("/auth", authRouter);

server.listen(8080)