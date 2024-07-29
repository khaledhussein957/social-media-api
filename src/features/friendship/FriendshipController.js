import {follow, getFriendships, updateFriendship, unfollow} from "./FriendshipRepository.js";


  export const CreateFriendship = async (req, res) => {
    try {
      const { userId, friendId } = req.body;
      const friendship = await follow(userId, friendId);
      res.status(201).json(friendship);
    } catch (error) {
      res.status(500).json({ message: "Error creating friendship" });
    }
  }

  export const GetFriendships = async (req, res) => {
    try {
      const userId = req.userID;
      const friendships = await getFriendships(userId);
      res.status(200).json(friendships);
    } catch (error) {
      res.status(500).json({ message: "Error getting friendships" });
    }
  }

  export const UpdateFriendship = async (req, res) => {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const friendship = await updateFriendship(id, status);
      res.status(200).json(friendship);
    } catch (error) {
      res.status(500).json({ message: "Error updating friendship" });
    }
  }

  export const DeleteFriendship = async (req, res) => {
    try {
      const id = req.params.id;
      await unfollow(id);
      res.status(204).json({ message: "Friendship deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting friendship" });
    }
  }