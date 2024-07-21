const router = require('express').Router();

//categories
router.use("/category", require("./category"))

//services
router.use("/services", require("./services"))

module.exports = router