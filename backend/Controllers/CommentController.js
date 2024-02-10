const Comment = require("../Models/Comment");
const Post = require("../Models/Post");



exports.createComment = async (req, res) => {
  try {
    const { post, user,description } = req.body;
    const data =await Comment.create({ post,user,description });
    const updatePost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: data._id },
      },
      { new: true }
    )
    .populate('likes')
    .populate('comments')
    .exec()
    res.status(200).json({
      success: true,
      message: "Comment created Succesfuly",
      data: updatePost,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Comment is not created ",
    });
  }
};
exports.getComments = async (req, res) => {
  try {
   const {id} = req.body;
    const users =await Comment.findById(id);
    console.log(users)
    res.status(200).json({
      success: true,
      message: "Commment finded Succesfuly",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: "Commment not finded ",
    });
  }
};
