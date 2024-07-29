import CommentRepository from "./CommentRepository.js";

const commentRepository = new CommentRepository();

class CommentController {
  async createComment(req, res) {
    try {
      const comment = await commentRepository.createComment(req.body);
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ message: "Error creating comment" });
    }
  }

  async getComments(req, res) {
    try {
      const comments = await commentRepository.getComments();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: "Error getting comments" });
    }
  }

  async getComment(req, res) {
    try {
      const comment = await commentRepository.getComment(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      res.status(404).json({ message: "Comment not found" });
    }
  }

  async updateComment(req, res) {
    try {
      const comment = await commentRepository.updateComment(req.params.id, req.body);
      res.status(200).json(comment);
    } catch (error) {
      res.status(404).json({ message: "Comment not found" });
    }
  }

  async deleteComment(req, res) {
    try {
      await commentRepository.deleteComment(req.params.id);
      res.status(204).json({ message: "Comment deleted" });
    } catch (error) {
      res.status(404).json({ message: "Comment not found" });
    }
  }
}

export default new CommentController();