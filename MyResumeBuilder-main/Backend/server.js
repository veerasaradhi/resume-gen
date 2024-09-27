const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config({path: "./.env"});
const cors = require('cors');
const mongoURI = process.env.MONGO_URI;


const app = express();

connectDB()

app.use(cors());
app.use(express.json());

app.use('/api/userDetail', require('./routes/userDetail'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))