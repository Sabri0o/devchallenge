module.exports = (sequelize, Sequelize) => {
    const Images = sequelize.define("images", {
      label: { type: Sequelize.STRING },
      imageUrl: {type: Sequelize.STRING}    
    }, {
      timestamps: false
  });

    return Images;
  };
