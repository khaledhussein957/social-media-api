import Friendship from "./FriendshipSchema.js";

class FriendshipRepository {
  async createFriendship(userId, friendId) {
    const friendship = new Friendship({ userId, friendId });
    return await friendship.save();
  }

  async getFriendships(userId) {
    return await Friendship.find({ userId }).populate("friendId");
  }

  async updateFriendship(id, status) {
    return await Friendship.findByIdAndUpdate(id, { status }, { new: true });
  }

  async deleteFriendship(id) {
    return await Friendship.findByIdAndRemove(id);
  }
}

export default new FriendshipRepository();