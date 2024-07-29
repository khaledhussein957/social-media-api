// import { createFriendship, deleteFriendship, getFriendships, updateFriendship } from "./FriendshipController.js";
import Friendship from "./FriendshipSchema.js";


  export const createFriendship = async (userId, friendId) => {
    const friendship = new Friendship({ userId, friendId });
    return await friendship.save();
  }

  export const getFriendships = async (userId) => {
    return await Friendship.find({ userId }).populate("friendId");
  }

  export const updateFriendship = async (id, status) => {
    return await Friendship.findByIdAndUpdate(id, { status }, { new: true });
  }

  export const deleteFriendship = async (id) => {
    return await Friendship.findByIdAndRemove(id);
  }
