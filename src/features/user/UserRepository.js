import mongoose from 'mongoose';
import userSchema from './UserSchema.js';

const User = mongoose.model("User", userSchema);

  export const createUser = async (user) => {
    return await User.create(user);
  }

  export const getUserByEmail = async (email) => {
    return await User.findOne({ email });
  }

  export const getUserById = async (id) => {
    return await User.findById(id);
  }

  export const updateUser = async (id, user) => {
    return await User.findByIdAndUpdate(id, user, { new: true });
  }

  export const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  }
