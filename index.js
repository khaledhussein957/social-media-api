import express from 'express';
import connectDB from './src/config/DBConfig.js';
import userRoute from './src/features/user/UserRoute.js'
import postRoute from './src/features/post/PostRoute.js'
import commentRoute from './src/features/comment/CommentRoute.js'
import friendshipRoute from './src/features/friendship/FriendshipRoute.js'
import jwtAuth from './src/middleware/jwtAuht.js';


const app = express();
const PORT = 9000;

app.use(express.json());
app.use("/api/users" , userRoute);
app.use("/api/posts", jwtAuth , postRoute);
app.use("/api/comments", jwtAuth , commentRoute);
app.use("/api/friendships", jwtAuth , friendshipRoute);



connectDB();

app.listen(PORT, () => {
    console.log('server listening on: ' + PORT);
});