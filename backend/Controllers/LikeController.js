const Like = require("../Models/Like");
const Post = require("../Models/Post");

exports.createLike = async (req, res) => {
  try {
    const { post, user } = req.body;
    const data = await Like.create({ post, user });
    const updatePost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: data._id },
      },
      { new: true }
    )
    .populate('likes')
    .populate('comments')
    .exec()
    res.status(200).json({
      success: true,
      message: "Like created Succesfuly",
      data: updatePost,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Like is not created ",
      responser:error
    });
  }
};
exports.getLikes = async (req, res) => {
  try {
    const { id } = req.body;
    const users = await Like.find();
    console.log(users);
    res.status(200).json({
      success: true,
      message: "Likes finded Succesfuly",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Likes not finded ",
    });
  }
};
