import express from 'express';
import { createPost, getAuthorPost, getAllPosts, getPost, updatePost, deletePost } from './PostRepository.js';

export const CreatePost = async (req, res) => {
  try {
    const token = req.cookies.author;
      console.log('Token:', token);
  
      if (!token) {
        return res.status(401).json('missed Unauthorized');
      }
  
      console.log('Secret Key:', process.env.SECRET_KEY);
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const authorId = decoded.userId;
  
      const author = await getUserById(authorId);
      if (!author) {
        return res.status(404).json( 'User not found' );
      }
      const content = req.body;

    const post = await createPost(content, author);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
}

export const GetAuthorPost = async (req, res) => {
  const { authorId } = req.params;
  try {
    const posts = await getAuthorPost(authorId);

    res.status(201).json(posts);


  } catch (error) {
    res.status(400).json(error.message);
  }
}

export const GetPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json( "Error getting posts" );
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

export const DeletePost = async (req, res) => {
  try {
    await deletePost(req.params.id);
    res.status(204).json({ message: "Post deleted" });
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
}