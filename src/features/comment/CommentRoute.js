import express from "express";
import { createComment, getComments, getComment, updateComment, deleteComment } from "./CommentController.js";

const router = express.Router();

router.post("/create", createComment);
router.get("/all", getComments);
router.get("/:id", getComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;