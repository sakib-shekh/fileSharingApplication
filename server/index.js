import express from 'express';
import dotenv from 'dotenv';
import router from './routes/route.js'
import cors from 'cors';
import DbConnection from './database/db.js';
const app=express();
app.use(cors());
app.use('/',router); 
dotenv.config({
    path:'./config/config.env'
})

DbConnection();
app.listen(process.env.PORT,(req,res)=>{
    console.log(`server started on port ${process.env.PORT}`);
})