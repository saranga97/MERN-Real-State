import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
    res.status(201).json("User created successfully");
};
