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

  app.post("/upload_image", (request, response) => {
    // collected image from a user
    const data = {
      image: request.body.image,
    }
    console.log('connected user: ',connectedId)
    console.log('post request sent to cloudinary')
    //console.log('data.image here',data.image)
    // upload image here
    cloudinary.uploader.upload(data.image)
    .then((image) => {
      console.log('cloudinary stored it successfully')
  ////////////// console.log the loged in user id
      db.iamges.update(
        {room_picture: image.secure_url,
        status:data.status,
        room_space:data.room_space,
        guest_or_host:'host'},
        { where: { id: connectedId } }) //// change id value with thisUserid later
        .then(result =>{
          response.send(result)
        })
        .catch(err =>{
          console.log('error: ',err)
        })
  //////////
    }).catch((error) => {
      response.status(500).send({
        message: "db connection failure",
        error,
      });
    });
  });

};
