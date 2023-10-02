const express = require('express');

const adminController = require("../controllers/admin.controller") 

const router = express.Router();
const products = []

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = {
  routes: router,
  products: products
}
