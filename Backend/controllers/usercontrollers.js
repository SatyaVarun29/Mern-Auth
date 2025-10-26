import asyncHandler from "express-async-handler";

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
  res.status(200).json({ message: "Register user" });
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
