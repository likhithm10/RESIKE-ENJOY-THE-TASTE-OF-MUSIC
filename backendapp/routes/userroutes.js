const usercontroller = require("../controllers/usercontroller")

const express = require("express")
const userrouter = express.Router()

// user routes
userrouter.post("/checkuserlogin",usercontroller.checkuserlogin)
userrouter.post("/insertuser",usercontroller.insertuser)
userrouter.get("/viewplaysongs/:songname",usercontroller.viewplaysongs)

module.exports = userrouter
