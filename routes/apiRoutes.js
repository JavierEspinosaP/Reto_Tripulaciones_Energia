const express = require('express')
const dataRouter = express.Router();
const dataController = require("../controllers/dataControllers")



dataRouter.get('/lavavajillas', dataController.getAllDataProducts)


module.exports = dataRouter