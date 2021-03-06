const db = require("../models");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// cloudinary configuration

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

module.exports = function (app) {
  app.post("/upload_image", (request, response) => {
    // collected image from a user
    const data = {
      image: request.body.image,
      label: request.body.label,
    };
    console.log("post request sent to cloudinary");
    // upload image here
    cloudinary.uploader
      .upload(data.image)
      .then((image) => {
        console.log("cloudinary stored it successfully");
        //////////////
        db.iamges
          .create({ imageUrl: image.secure_url, label: data.label })
          .then((result) => {
            response.send(result);
          })
          .catch((err) => {
            console.log("error: ", err);
          });
        //////////
      })
      .catch((error) => {
        response.status(500).send({
          message: "db connection failure",
          error,
        });
      });
  });

  ///////////////////////// get all the images

  app.post("/get_images", (request, response) => {
    // collected image from a user
    const data = {
      image: request.body.image,
      label: request.body.label,
    };
    //////////////
    db.iamges
      .findAll({
        order: [["createdAt", "DESC"]],
      })
      .then((result) => {
        response.send(result);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  });

  ///////////////////////////////////////////  delete image

  app.post("/delete_image", function (request, response) {
    const data = {
      id: request.body.id,
    };
    db.iamges
      .destroy({
        where: {
          id: data.id,
        },
      })
      .then(() => {
        response.send({ message: "image deleted successfully" });
      })
      .catch((err) => {
        response.status(500).send({ message: err.message });
      });
  });
};
