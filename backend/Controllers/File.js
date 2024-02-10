const File = require("../Models/File");
const cloudinary = require("cloudinary");
exports.fileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("File AAgayi", file);
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    file.mv(path, (err) => {
      console.log(err);
    });
    res.json({
      success: true,
      message: "File Stored Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
function isFileTypeSupport(type, supportTypes) {
  return supportTypes.includes(type);
}

async function uploadFileToCloudinary(file, folderName, quality) {
  const options = { folderName, resource_type: "auto" };

  return await cloudinary.uploader.upload(file.tempFilePath, options, quality);
}

exports.imageUpload = async (req, res) => {
  try {
    // const { name, tags, email } = req.body;
    // console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log("File AAgayi", file);

    //Validation
    const supportTypes = ["jpg", "jpeg", "png", "pdf"];

    let fileType = file.name.split(".")[1].toLowerCase();
    console.log(fileType);

    if (!isFileTypeSupport(fileType, supportTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not support",
      });
    }
    //if support

    const response = await uploadFileToCloudinary(file, "Hansala"); //Hansal->Folder name in Cloudeinary
    console.log(response);
    //db save entry

    const fileSave = await File.create({
      //   name,
      //   tags,
      imageUrl: response.secure_url,
      //   email,
    });
    res.json({
      success: true,
      response: fileSave,
      message: "Image Upload Succesfully",
    });
  } catch (error) {
    console.error(error);
    response.status(401).json({
      success: false,
      message: "something went wrong",
    });
  }
};

exports.getFileString = async (req, res) => {
  try {
    const file =  await File.findOne().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      response: file,
      message: "Image getup",
    });
  } catch (error) {
    res.status(200).json({
      success: false,

      message: "Image not Found",
    });
  }
};
