import Comment from "./CommentSchema.js";

class CommentRepository {
  async createComment(comment) {
    return await Comment.create(comment);
  }

  async getComments() {
    return await Comment.find().sort({ createdAt: -1 });
  }

  async getComment(id) {
    return await Comment.findById(id);
  }

  async updateComment(id, comment) {
    return await Comment.findByIdAndUpdate(id, comment, { new: true });
  }

  async deleteComment(id) {
    return await Comment.findByIdAndDelete(id);
  }
}

export default new CommentRepository();