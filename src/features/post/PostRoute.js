import express from "express";
import jwtAuth from '../../middleware/jwtAuht.js'
import {CreatePost, GetAuthorPost, GetPost, GetPosts, UpdatePost, DeletePost} from './PostController.js';

const router = express.Router();

// router.use(jwtAuth); // apply jwtAuth middleware to all routes

// create post
router.post("/posts/create-post", CreatePost);
// get all posts
router.get("/posts/all-posts", GetPosts);
// get user posts
router.get("/posts/get-user-posts", GetAuthorPost);
// get post by id
router.get("/posts/:id", GetPost);
// update post
router.put("/update-posts/:id", UpdatePost);
// delete post
router.delete("/delete-posts/:id", DeletePost);

export default router;