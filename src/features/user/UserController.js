import {createUser, getUserByEmail, getAllUsers, getUserById, updateUser, deleteUser} from './UserRepository.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


  export const registerUser = async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await createUser({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      res.send({ message: 'User registered successfully', user });      
    } catch (error) {
      res.status(400).send(' error ' , error.message );
    }
  }

  export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(401).send("Invalid email or password");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).send("Invalid email or password");
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      // set the token as a cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 3600000, // 1 hour
      });

      res.status(200).json({ message: 'Logged in successfully', token });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  export const GetAllUsers = async (req, res) => {
    try {
      const users = await getAllUsers(); // Call the function from UserRepository
      res.send(users);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  export const getProfile = async (req, res) => {
    try {
      const user = await getUserById(req.user.userId);
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  export const updateProfile = async (req, res) => {
    try {
      const user = await updateUser(req.user.userId, req.body);
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  export const deleteProfile = async (req, res) => {
    try {
      await deleteUser(req.user.userId);
      res.send({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }