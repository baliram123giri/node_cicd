const router = require('express').Router();

//categories
router.use("/category", require("./category"))

module.exports = router