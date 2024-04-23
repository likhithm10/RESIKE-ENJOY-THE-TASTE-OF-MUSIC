const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.get("/viewusers",admincontroller.viewusers)
adminrouter.delete("/deleteuser/:email",admincontroller.deleteuser)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)

// upload and display events with images

adminrouter.post("/createalbum",admincontroller.createalbum)
adminrouter.get("/viewalbums",admincontroller.viewalbums)
adminrouter.get("/albumimage/:filename",admincontroller.albumimage)



module.exports = adminrouter