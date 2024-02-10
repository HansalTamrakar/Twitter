const Post = require("../Models/Post");

exports.createPost = async (req, res) => {
  try {
    const { description, videoUrl } = req.body;
    const user = await Post.create({ description, videoUrl });
    res.status(200).json({
      success: true,
      message: "Post created Succesfuly",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Post not created ",
    });
  }
};
exports.getPost = async (req, res) => {
  try {
    const { id } = req.body;
    const users = await Post.find({ _id: id });
    console.log(users);
    res.status(200).json({
      success: true,
      message: "Post finded Succesfuly",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Post not finded ",
    });
  }
};
