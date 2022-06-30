"use strict";

const express = require("express");
const app = express();

const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드

app.listen(PORT, () => console.log("서버 가동"));
