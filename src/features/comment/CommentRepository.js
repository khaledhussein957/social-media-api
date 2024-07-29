import Comment from "./CommentSchema.js";

  export const createComment = async (content, postId, userId) => {
    const comment = new Comment({ content, postId, userID: userId });
    return await Comment.create(comment);
  }

  export const getComments = async () => {
    return await Comment.find().sort({ createdAt: -1 });
  }

  export const getComment = async (id) => {
    return await Comment.findById(id);
  }

  export const updateComment = async (id, comment) => {
    return await Comment.findByIdAndUpdate(id, comment, { new: true });
  }

  export const deleteComment = async (id) => {
    return await Comment.findByIdAndDelete(id);
  }
