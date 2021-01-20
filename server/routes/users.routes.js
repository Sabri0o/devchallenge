const db = require("../models");
const cloudinary = require("cloudinary").v2;

// cloudinary configuration

cloudinary.config({
  cloud_name: "xxxxxxxxxxxx",
  api_key: "xxxxxxxxxxxx",
  api_secret: "xxxxxxxxxxxx"
});

module.exports = function(app) {

};
