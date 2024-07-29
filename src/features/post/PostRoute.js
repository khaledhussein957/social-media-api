import express from "express";
import { createPost, getPosts, getPost, updatePost, deletePost } from "./PostController.js";

const PostRouter = express.Router();

PostRouter.post("/create", createPost);
PostRouter.get("/all", getPosts);
PostRouter.get("/:id", getPost);
PostRouter.put("/:id", updatePost);
PostRouter.delete("/:id", deletePost);

export default PostRouter;