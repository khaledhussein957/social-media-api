import mongoose from "mongoose";
import db from '../../config/DBConfig.js'

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default db.model("Post", postSchema);