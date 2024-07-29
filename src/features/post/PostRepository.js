// import { deletePost, getPost, getPosts, updatePost } from "./PostController.js";
import Post from "./PostSchema.js";


  export const createPost = async (post) => {
    return await Post.create(post);
  }

  export const getPosts = async () => {
    return await Post.find().sort({ createdAt: -1 });
  }

  export const getPost = async (id) => {
    return await Post.findById(id);
  }

  export const updatePost = async (id, post) => {
    return await Post.findByIdAndUpdate(id, post, { new: true });
  }

  export const deletePost = async (id) => {
    return await Post.findByIdAndDelete(id);
  }
