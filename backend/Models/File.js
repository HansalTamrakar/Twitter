const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    // required:true
  },
  createdAt: {
    type: Date,
    default:Date.now
    // required:true
  },
});
module.exports = mongoose.model("File", FileSchema);
