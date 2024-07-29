import express from "express";
import { createFriendship , getFriendships, updateFriendship, deleteFriendship} from "./FriendshipController.js";

const FriendshipRoute = express.Router();


FriendshipRoute.post("/friendships", createFriendship);
FriendshipRoute.get("/friendships", getFriendships);
FriendshipRoute.put("/friendships/:id", updateFriendship);
FriendshipRoute.delete("/friendships/:id", deleteFriendship);

export default FriendshipRoute;