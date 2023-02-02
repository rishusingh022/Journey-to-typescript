// const express = require('express');
import express from 'express';
import router from './routes/index.js'

const port = 3000;
const app = express();
app.use(express.json());


// const apiRoutes = require('./routes/index');

app.use('/api',router);

app.listen(port,() => {
    console.log(`http://localhost://${port}/`);
});
