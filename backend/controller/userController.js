import User from "../models/User.js"


// GET USER PROFILE
const getUserProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.id).select("-password")

    res.json(user)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// UPDATE USER PROFILE
const updateUserProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    user.name = req.body.name || user.name
    user.avatar = req.body.avatar || user.avatar

    const updatedUser = await user.save()

    res.json(updatedUser)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password")

    res.json(users)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


export { getUserProfile, updateUserProfile, getAllUsers }