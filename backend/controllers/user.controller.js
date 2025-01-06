import { User } from "../models/user.model.js";

const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filteredUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json(filteredUser);
  } catch (error) {
    console.error(
      "Internal server error in getUserForSidebar: ",
      error.message
    );
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getUserForSidebar };
