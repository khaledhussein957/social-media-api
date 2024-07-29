import express from 'express';
import connectDB from './src/config/DBConfig.js';
import userRoute from './src/features/user/UserRoute.js'
import postRoute from './src/features/post/PostRoute.js'
import commentRoute from './src/features/comment/CommentRoute.js'
import jwtAuth from './src/middleware/jwtAuht.js';


const app = express();
const PORT = 9000;

app.use(express.json());
app.use("/users", jwtAuth , userRoute);
app.use("/posts", jwtAuth , postRoute);
app.use("/comments", jwtAuth , commentRoute);


connectDB();

app.listen(PORT, () => {
    console.log('server listening on: ' + PORT);
});