import {createUser, follow, unfollow, getFollowing, getFollowed, getUserByEmail, getAllUsers, getUserById, updateUser, deleteUser} from './UserRepository.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


// register
  export const registerUser = async (req, res) => {
    try {

      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await createUser({
        username,
        email,
        password: hashedPassword,
      });

      // check the password
      if(!password || password.length < 8){

        return res.send(
          "Password must contains at least 8 character"
        );
      }

      // check if email exist
      const exitEmail = await getUserByEmail(email);
      if(exitEmail){

        return res.send(
          "Email already taken..."
        );
      }

      res.send('User registered successfully', user );      
    } catch (err) {
      res.send("something went wrong" + err.message);
    }
  }

  // login
  export const loginUser = async (req, res) => {
    
    try {
      const { email, password } = req.body;
      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(400).send("Invalid Email!");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(400).send("Incorrect password");
      }

      const expiresIn = 60 * 60; // 1 hour
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn
      });

      // set the token as a cookie
      res.cookie("author", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: expiresIn * 1000, // 1 hour
      });

      res.status(200).send({ ...user.toJSON(), expiresIn });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  //follow
  export const followUser = async (req, res) => {
    const { userId, followId } = req.body;
    try {
      await follow(userId, followId);
      res.status(201).send({ message: 'Followed successfully' });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  //unfollow
  export const unFollowUSer = async (req, res) => {
    const { userId, unfollowId } = req.body;
    try {
      await unfollow(userId, unfollowId);
      res.status(201).send({ message: 'Unfollowed successfully' });
    } catch (error) {
      res.status(400).send({ message: error.message});
    }
  }

  // get following
  export const getFollowingUsers = async (req, res) => {
    const { userId } = req.params;
    try {
      const following = await getFollowing(userId);
      res.status(200).send(following);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  // get followed
  export const getFollowedUsers = async (req, res) => {
    const { userId } = req.params;
    try {
      const followers = await UserRepository.getFollowers(userId);
      res.status(200).send(followers);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  // get all
  export const GetAllUsers = async (req, res) => {
    try {
      const users = await getAllUsers(); // Call the function from UserRepository
      res.send(users);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  // get profile
  export const getProfile = async (req , res) => {
    try {
      const token = req.cookies.author;
      console.log('Token:', token);
  
      if (!token) {
        return res.status(401).json('Unauthorized');
      }
  
      console.log('Secret Key:', process.env.SECRET_KEY);
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decoded.userId;
  
      const user = await getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.send(user);
    } catch (error) {
      console.error(error); 
      res.status(400).send({ message: error.message });
    }
  };
  

  // update profile
  export const updateProfile = async (req, res) => {
    try {
      const user = await updateUser(req.user.userId, req.body);
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  // delete profile
  export const deleteProfile = async (req, res) => {
    try {
      await deleteUser(req.user.userId);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }