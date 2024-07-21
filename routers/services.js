const { createService, listOfService } = require('../controllers/services/services.controller');
const multer = require('multer');
const {  uploadCloudinary } = require('../utils/helpers');

// Configure Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = require('express').Router();
//categories
router.post("/create", upload.single('imageUrl'), uploadCloudinary("Fiverr"), createService)
router.get("/list", listOfService)

module.exports = router