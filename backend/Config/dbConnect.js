const mongoose = require("mongoose");
exports.dbConnect = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/Twitter')
    .then(() => {
      console.log("Connect with Port 4000");
    })
    .catch((error) => {
      console.log(error);
    });
};
