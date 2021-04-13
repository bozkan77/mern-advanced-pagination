import express from "express";
import dotenv from "dotenv";
// custom components
import connectDB from "./config/db.js"
// routers
import postRoutes from "./routes/postRoutes.js";

connectDB();

dotenv.config(); 

const app = express();

app.use(express.json());

app.use('/api/v1/posts', postRoutes)

const PORT = process.env.PORT;

app.listen(PORT, ()=> console.log(`Server ${PORT} portu üzerinde çalışıyor.`))