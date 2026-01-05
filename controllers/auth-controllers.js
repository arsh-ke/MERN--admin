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
// login page logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. check user exist
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(422).json({ error: "invalid credentials1" });
    }

    // 2. compare password
    const isMatch = await bcrypt.compare(
      password,
      userExist.password
    );

    if (!isMatch) {
      return res.status(422).json({ error: "Invalid email or password" });
    }

    // 3. success
    res.status(200).json({
      message: "Login successful",
      userid: userExist._id.toString()
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export { home, registration, login };
