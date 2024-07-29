import express from "express";
import {CreateComment, GetComment, GetComments, UpdateComment, DeleteComment} from "./CommentController.js";

const router = express.Router();

// router.use(jwtAuth); // apply jwtAuth middleware to all routes

router.post("/create", CreateComment);
router.get("/all", GetComment);
router.get("/:id", GetComments);
router.put("/:id", UpdateComment);
router.delete("/:id", DeleteComment);

export default router;