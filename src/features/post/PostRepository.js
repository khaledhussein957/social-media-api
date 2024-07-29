import Post from "./PostSchema.js";

class PostRepository {
  async createPost(post) {
    return await Post.create(post);
  }

  async getPosts() {
    return await Post.find().sort({ createdAt: -1 });
  }

  async getPost(id) {
    return await Post.findById(id);
  }

  async updatePost(id, post) {
    return await Post.findByIdAndUpdate(id, post, { new: true });
  }

  async deletePost(id) {
    return await Post.findByIdAndDelete(id);
  }
}

export default new PostRepository();