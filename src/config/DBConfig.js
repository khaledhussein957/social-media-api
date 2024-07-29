import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const dbURL = process.env.DB_URL;

const connectDB = async () => {
  try {
    // success
    await mongoose.connect(dbURL);

    console.log('Connected to the database: ' + dbURL);
  } catch (error) {
    // error message
    console.log(`Error connecting to the database ${error}`);
    process.exit(1);
  }
};

export default connectDB;