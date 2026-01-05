//home page logic
import { json } from "express";
import User from "../model/user-schemas.js";
import bcrypt from "bcryptjs";
const home = async(req,res) => {
    try {
        res.send("this is the home page")
        
    } catch (error) {
        
    }
}
//registration page logic
const registration = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userCreated = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
    });

    const token = await userCreated.generateToken();
    console.log("TOKEN => ", token);

    res.status(201).json({
      message: "User registered successfully",
      token: token,
      userid: userCreated._id.toString(),
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export {home,registration}