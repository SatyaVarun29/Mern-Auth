import asyncHandler from "express-async-handler";
import User from "../models/usermodels.js";
import generateToken from "../utils/generatetoken.js";

// @desc autheticate user
// route post /api/users/auth
// @access public
const authuser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// @desc autheticate user
// route post /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(re)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user");
  }
});

// @desc createuser profile
// route get /api/users/profile
// @access private
const getuserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// @desc user logout
// route post /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

// @desc user update
// route put /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user" });
});

export {
  authuser,
  registerUser,
  getuserProfile,
  updateUserProfile,
  logoutUser,
};
