const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db");

require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

const routes = require('./router');

app.use(express.json());

connectDB();

app.use(cors());

app.use('/api', routes)

app.listen(port, console.log(`Iniciou server na porta ${port}`));