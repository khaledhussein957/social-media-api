// import { deletePost, getPost, getPosts, updatePost } from "./PostController.js";
import Post from "./PostSchema.js";


  export const createPost = async (content, authorId) => {
    const post = new Post({ content, author: authorId });
    return await post.save();  
  }

  export const getAuthorPost = async (authorId) => {
    return await Post.find({ author: authorId })
    .populate({
      path: "author",
      model: "User",
      select: "username email"
    })
    .sort({ createdAt: -1});
  }

  export const getAllPosts = async () => {
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
