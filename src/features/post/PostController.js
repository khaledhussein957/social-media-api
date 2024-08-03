import express from 'express';
import { createPost, getAuthorPost, getAllPosts, getPost, updatePost, deletePost } from './PostRepository.js';

export const CreatePost = async (req, res) => {

    const currentUser = req.user._id;
    console.log(currentUser);

    if (!currentUser) {
      return res.status(401).send('Unauthorized: Missing user');
    }
    const { content } = req.body;


    try {
    const post = await createPost({
      content : content,
      author : currentUser
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error creating post" });
  }
}

export const GetAuthorPost = async (req, res) => {
  const authorId = req.user._id;
  try {
    const posts = await getAuthorPost({
      author: authorId
    });

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