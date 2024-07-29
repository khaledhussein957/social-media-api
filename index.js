import express from 'express';
import connectDB from './src/config/DBConfig.js';


const app = express();
const PORT = 9000;

connectDB();

app.listen(PORT, () => {
    console.log('server listening on: ' + PORT);
});