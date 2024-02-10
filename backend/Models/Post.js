const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Comment",
  }],
  likes:[ {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Like",
  }],
  description: {
    type: String,
    required: true,
  },
  photourl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", PostSchema);
