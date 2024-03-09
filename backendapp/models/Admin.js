const mongoose = require("mongoose")

const adminlogin = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

const admin = mongoose.model('Admin', adminlogin);  //(collectionName,schema name,)

module.exports = admin;
