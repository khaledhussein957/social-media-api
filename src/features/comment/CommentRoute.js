import express from "express";
import {CreateComment, GetComment, GetComments, UpdateComment, DeleteComment} from "./CommentController.js";

const router = express.Router();

// router.use(jwtAuth); // apply jwtAuth middleware to all routes

router.post(`/posts/:tId/create-comment`, CreateComment);
router.get("/all-comments", GetComment);
router.get("/comments/:id", GetComments);
router.put(`/posts/:Id/comments/:id`, UpdateComment);
router.delete(`/posts/:id/comments/:id`, DeleteComment);

export default router;