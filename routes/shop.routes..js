const path = require('path');

const express = require('express');

const shopController = require("../controllers/shop.controller")

const router = express.Router();
router.get('/', shopController.getProducts);

module.exports = router;
