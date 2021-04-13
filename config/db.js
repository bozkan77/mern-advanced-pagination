import mongoose from "mongoose";
import dotenv from "dotenv";



const connectDB = async () => {

  dotenv.config();
  
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: true, 
      useUnifiedTopology: true
    })
    console.log('MongoDB bağlantısı başarılı.');
  } catch (err) {
    console.log('MongoDB bağlatısı başarısız.');
    console.log(err);
    process.exit(1); 
  }
}

export default connectDB;