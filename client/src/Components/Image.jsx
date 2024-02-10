import React, { useState } from "react";
import axios from "axios";
import photo from "../Assets/photo.png";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("imageFile", selectedFile);
    

    try {
      const response = await axios
        .post("//localhost:4000/imageupload", formData, {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
          // method:'cors'
        })
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center pt-4 text-sky-500 text-3xl ">Upload media</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="h-96 w-11/12  text-center m-12 border p-48 pr-12 text-3xl font-serif border-black text-black"
      ></input>
      <button
        onClick={handleSubmit}
        className="bg-blue-400 w-32 h-10 rounded-3xl font-extrabold ml-72"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
