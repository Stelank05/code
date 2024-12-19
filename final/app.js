require('dotenv').config();

const express = require('express');

const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

// Setup Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(result => {
        console.log("Connected to MongoDB Database");
    })
    .catch(err => console.log("MongoDB Connection Error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/pages');
app.set('view engine', 'ejs');

// Routers
const homeRouter = require('./src/routes/homeRouter_New');
const formulaOneRouter = require('./src/routes/formulaOneRouter');
const wecRouter = require('./src/routes/wecRouter');
const imsaRouter = require('./src/routes/imsaRouter');
const allRouter = require('./src/routes/displayAllRouter');

app.use(homeRouter);
app.use(formulaOneRouter);
app.use(wecRouter);
app.use(imsaRouter);
app.use(allRouter);

app.use(express.static(__dirname));
app.use('/designs', express.static(__dirname));
app.use('/scripts', express.static(__dirname));

module.exports = app;