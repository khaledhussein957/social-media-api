import FriendshipRepository from "./FriendshipRepository.js";

class FriendshipController {
  constructor() {
    this.friendshipRepository = new FriendshipRepository();
  }

  async createFriendship(req, res) {
    try {
      const { userId, friendId } = req.body;
      const friendship = await this.friendshipRepository.createFriendship(userId, friendId);
      res.status(201).json(friendship);
    } catch (error) {
      res.status(500).json({ message: "Error creating friendship" });
    }
  }

  async getFriendships(req, res) {
    try {
      const userId = req.userID;
      const friendships = await this.friendshipRepository.getFriendships(userId);
      res.status(200).json(friendships);
    } catch (error) {
      res.status(500).json({ message: "Error getting friendships" });
    }
  }

  async updateFriendship(req, res) {
    try {
      const id = req.params.id;
      const status = req.body.status;
      const friendship = await this.friendshipRepository.updateFriendship(id, status);
      res.status(200).json(friendship);
    } catch (error) {
      res.status(500).json({ message: "Error updating friendship" });
    }
  }

  async deleteFriendship(req, res) {
    try {
      const id = req.params.id;
      await this.friendshipRepository.deleteFriendship(id);
      res.status(204).json({ message: "Friendship deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting friendship" });
    }
  }
}

export default new FriendshipController();