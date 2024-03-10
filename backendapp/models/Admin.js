const mongoose = require("mongoose")

const adminsignup = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

const admin = mongoose.model('Admin', adminsignup);  //(collectionName,schema name,)

module.exports = admin;
