import mongoose from 'mongoose';
import userSchema from './UserSchema.js';

const User = mongoose.model("User", userSchema);

  export const createUser = async (user) => {
    return await User.create(user);
  }

  export const follow = async (userId, followId) => {
    const user = await User.findById(userId);
    const followUser = await User.findById(followId);
    if (!user || !followUser) {
      throw new Error('User not found');
    }
    user.following.push(followUser);
    followUser.followers.push(user);
    await user.save();
    await followUser.save();
  }

  export const unfollow = async (userId, unfollowId) => {
    const user = await User.findById(userId);
    const unfollowUser = await User.findById(unfollowId);
    if (!user || !unfollowUser) {
      throw new Error('User not found');
    }
    user.following.pull(unfollowUser);
    unfollowUser.followers.pull(user);
    await user.save();
    await unfollowUser.save();
  }

  export const getFollowing = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user.following;
  }

  export const getFollowed = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user.followers;
  }

  export const getUserByEmail = async (email) => {
    return await User.findOne({ email });
  }

  export const getAllUsers = async () => {
    return await User.find();
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
