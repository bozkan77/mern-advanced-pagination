import express from "express";
import dotenv from "dotenv";
// custom components
import connectDB from "./config/db.js"

connectDB();

dotenv.config(); 

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Server ${PORT} portu üzerinde çalışıyor.`))