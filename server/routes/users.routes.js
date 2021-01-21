const db = require("../models");
const cloudinary = require("cloudinary").v2;
require ('dotenv').config()

// cloudinary configuration

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

module.exports = function(app) {

};
