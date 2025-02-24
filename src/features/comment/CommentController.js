import { createComment, getPostComments, getComment, getComments, updateComment, deleteComment } from "./CommentRepository.js";



export const CreateComment = async (req, res) => {
  try {
    const {content, authorID, postId} = req.body;

    if (!userID) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const comment = await createComment(content, postId, authorID);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Error creating comment" });
  }
}

export const GetPostComments = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await getPostComments(postId);
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

export const GetComments = async (req, res) => {
  try {
    const comments = await getComments();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error getting comments" });
  }
}

export const GetComment = async (req, res) => {
  try {
    const comment = await getComment(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ message: "Comment not found" });
  }
}

export const UpdateComment = async (req, res) => {
  try {
    const comment = await updateComment(req.params.id, req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ message: "Comment not found" });
  }
}

export const DeleteComment = async (req, res) => {
  try {
    await deleteComment(req.params.id);
    res.status(204).json({ message: "Comment deleted" });
  } catch (error) {
    res.status(404).json({ message: "Comment not found" });
  }
}
