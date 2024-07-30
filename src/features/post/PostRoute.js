import express from "express";
import jwtAuth from '../../middleware/jwtAuht.js'
import {CreatePost, GetUserPost, GetPost, GetPosts, UpdatePost, DeletePost} from './PostController.js';

const router = express.Router();

// router.use(jwtAuth); // apply jwtAuth middleware to all routes

router.post("/create-post", CreatePost);
router.get("/all-posts", GetPosts);
router.get("/get-user-posts", GetUserPost);
router.get("/posts/:id", GetPost);
router.put("/update-posts/:id", UpdatePost);
router.delete("/delete-posts/:id", DeletePost);

export default router;