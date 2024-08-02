import express from "express";
import {CreateComment, GetPostComments, GetComment, GetComments, UpdateComment, DeleteComment} from "./CommentController.js";

const router = express.Router();

// router.use(jwtAuth); // apply jwtAuth middleware to all routes

router.post(`/create-comment`, CreateComment);
router.get("/all-comments", GetComment);
router.get("/comments/:postId", GetPostComments);
router.put(`/comments/:commentId`, UpdateComment);
router.delete(`/comments/:commentId`, DeleteComment);

export default router;