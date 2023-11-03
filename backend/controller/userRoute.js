import express from "express";
import User from "../Model/userModel.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is home page for the process");
});

router.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;

  // const checkUser = await User.findOne({email})

  const newUser = new User({
    name,
    username,
    email,
    password,
  });

  await newUser.save();
  // res.status(201).json({
  //   message: "user Created successfully",
  // });
  const token = jwt.sign({ id: newUser._id }, "secret");

  res
    .cookie("access_token", token, { httpOnly: true })
    .status(200)
    .json({ message: "user created successfully", newUser, token });
});

// router.post()

export default router;
