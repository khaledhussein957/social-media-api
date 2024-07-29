import express from "express";
import {CreatePost, GetPost, GetPosts, UpdatePost, DeletePost} from './PostController.js';

const router = express.Router();

router.post("/create", CreatePost);
router.get("/all", GetPosts);
router.get("/:id", GetPost);
router.put("/:id", UpdatePost);
router.delete("/:id", DeletePost);

export default router;