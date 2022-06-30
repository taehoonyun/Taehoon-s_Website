"use strict";

const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드
// /로 들어오면 home이란 곳으로 보냄 연결해주는거라 미들웨어인가

module.exports = app;
