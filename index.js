
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 5000
const app = express()
const mongoose = require('mongoose')
const router = require('./router/router')
const errorMiddleware = require('./middlewares/error-middleware')

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try{  

        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`hey app is listening ${PORT}`);
        });
   
    } catch(e){
        console.log(e)
    }
}

start();