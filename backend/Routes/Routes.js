const express = require("express");
const { createUser, getUser } = require("../Controllers/UserController");
const { createLike, getLikes } = require("../Controllers/LikeController");
const {
  createComment,
  getComments,
} = require("../Controllers/CommentController");
const { createPost, getPost } = require("../Controllers/PostController");
const { fileUpload, imageUpload, getFileString } = require("../Controllers/File");

const router = express.Router();

router.post("/createuser", createUser);
router.get("/getuser", getUser);
router.post("/createlike", createLike);
router.get("/getlike", getLikes);
router.post("/createcomment", createComment);
router.get("/getcomment", getComments);
router.post("/createpost", createPost);
router.get("/getpost", getPost);
router.post("/fileupload", fileUpload);
router.post("/imageupload", imageUpload);
router.get("/getfileString", getFileString);


module.exports = router;
