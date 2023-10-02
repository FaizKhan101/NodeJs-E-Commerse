const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require("./admin")

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.render("shop", { pageTitle: "Shop", prods: adminData.products, path: "/" })
});

module.exports = router;
