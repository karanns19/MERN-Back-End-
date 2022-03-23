// This will be our Entry Point of our Project

const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Hello Karan'));

const port = 8082;

app.listen(port, () => console.log('Server is running on port ${port}'));
