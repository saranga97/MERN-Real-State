import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcryptjs.hashSync(password, 12);
  const newuser = new User({ username, email, password : hashedPassword});

  try {
    await newuser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  } 
};
