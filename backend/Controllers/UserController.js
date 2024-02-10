const User = require("../Models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, email, lastname } = req.body;
    const user =await User.create({ name, lastname, email });
    res.status(200).json({
      success: true,
      message: "person created Succesfuly",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "person not created ",
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const {id}=req.body;
    const users =await User.find({_id:id});
    console.log(users)
    res.status(200).json({
      success: true,
      message: "person finded Succesfuly",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "person not finded ",
    });
  }
};
