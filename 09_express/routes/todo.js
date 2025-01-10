"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var app = express();
app.get('/', (req, res) => {
    res.send("aus der todo route");
});
module.exports = app;
