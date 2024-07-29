import {createPost, getPosts, getPost, updatePost, deletePost} from './PostRepository.js';

  export const CreatePost = async (req, res) => {
    try {
      const post = await createPost(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: "Error creating post" });
    }
  }

  export const GetPosts = async (req, res) => {
    try {
      const posts = await getPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: "Error getting posts" });
    }
  }

  export const GetPost = async (req, res) => {
    try {
      const post = await getPost(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: "Post not found" });
    }
  }

  export const UpdatePost = async (req, res) => {
    try {
      const post = await updatePost(req.params.id, req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: "Post not found" });
    }
  }

  export const DeletePost = async(req, res) => {
    try {
      await deletePost(req.params.id);
      res.status(204).json({ message: "Post deleted" });
    } catch (error) {
      res.status(404).json({ message: "Post not found" });
    }
  }