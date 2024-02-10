const express = require("express");
const { dbConnect } = require("./Config/dbConnect");
const cors = require('cors')
const router = require("./Routes/Routes");
const app = express();
const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./Config/cloudinary");
app.use(cors())
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
cloudinaryConnect()

app.listen(4000, () => {
  console.log("Port is Listenning at 4000");
});
app.get("/", (req, res) => {
  res.send("<h1>Hello JEE</h1>");
});
app.use(router)

dbConnect()