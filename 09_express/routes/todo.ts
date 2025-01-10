import express = require('express');
import {Router} from 'express';


var app = express();

app.get('/', (req, res) => {
    res.send("aus der todo route");
})

module.exports = app