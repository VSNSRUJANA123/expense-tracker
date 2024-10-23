const express = require("express");
const {
  addCategory,
  getCategories,
} = require("../controllers/categoryController");
const router = express.Router();

router.post("/categories", addCategory);

router.get("/categories", getCategories);

module.exports = router;
