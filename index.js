import express from 'express';
import connectDB from './src/config/DBConfig.js';
import userRoute from './src/features/user/UserRoute.js'
import postRoute from './src/features/post/PostRoute.js'
import commentRoute from './src/features/comment/CommentRoute.js'
import friendshipRoute from './src/features/friendship/FriendshipRoute.js'
import jwtAuth from './src/middleware/jwtAuht.js';
import cookieParser from 'cookie-parser';


const app = express();
const PORT = 9000;

app.use(express.json());
app.use(cookieParser());


app.use("/api" , userRoute);
app.use("/api", jwtAuth , postRoute);
app.use("/api", jwtAuth , commentRoute);
app.use("/api", jwtAuth , friendshipRoute);



connectDB();

app.listen(PORT, () => {
    console.log('server listening on: ' + PORT);
});