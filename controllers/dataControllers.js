const dataModel = require('../models/products');



const getAllDataProducts = async (req, res) => {
    let dataProducts;
    try{
      dataProducts = await dataModel.getAllProducts()
      res.status(200).json()
    } catch (error) {
      console.log(error.message);
    }
  }

  module.exports = {
    getAllDataProducts
  }