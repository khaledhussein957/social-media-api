import PostRepository from './PostRepository.js';

const postRepository = new PostRepository();

class PostController {
  async createPost(req, res) {
    try {
      const post = await postRepository.createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Error creating post" });
    }
  }

  async getPosts(req, res) {
    try {
      const posts = await postRepository.getPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error getting posts" });
    }
  }

  async getPost(req, res) {
    try {
      const post = await postRepository.getPost(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: "Post not found" });
    }
  }

  async updatePost(req, res) {
    try {
      const post = await postRepository.updatePost(req.params.id, req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: "Post not found" });
    }
  }

  async deletePost(req, res) {
    try {
      await postRepository.deletePost(req.params.id);
      res.status(204).json({ message: "Post deleted" });
    } catch (error) {
      res.status(404).json({ message: "Post not found" });
    }
  }
}

export default new PostController();