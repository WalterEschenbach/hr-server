const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sample.controller.js');

router.route('/').get(sampleController.getSample);

module.exports = router;