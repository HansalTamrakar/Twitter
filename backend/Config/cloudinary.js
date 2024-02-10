const cloudinary = require("cloudinary").v2; //v2-->Version
require("dotenv").config()
exports.cloudinaryConnect = () =>{
    try {
        cloudinary.config({
            cloud_name:process.env.cloud_name,
            api_key:process.env.api_key,
            api_secret:process.env.api_secret
        })
     
 
    } catch (error) {
        console.log(error)
    }
}