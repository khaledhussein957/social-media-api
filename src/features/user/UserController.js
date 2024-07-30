import {createUser, getUserByEmail, getAllUsers, getUserById, updateUser, deleteUser} from './UserRepository.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


// register
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

      // check the password
      if(!password || password.length < 8){

        return res.json({
          error : "Password must contains at least 8 character"
        });
      }

      if(password.contains("123456789")){

        return res.json({
          error: "password must be strong one"
        })
      }

      // check if email exist
      const exitEmail = await getUserByEmail({email});
      if(exitEmail){

        return res.json({
          error : "Email already taken..."
        });
      }

      res.json({ message: 'User registered successfully', user });      
    } catch (error) {
      res.status(400).send(' error ' , error.message );
    }
  }

  // login
  export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await getUserByEmail(email);
      if (!user) {
        return res.json({error: "Invalid email!"});
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.json({error: "wrong password!"});
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
  export const getProfile = async (req, res) => {
    try {
      const user = await getUserById(req.user.userId);
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

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
      res.send({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }