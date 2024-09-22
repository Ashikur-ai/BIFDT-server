const pushNotificationController = require('../controllers/push-notification.controller');
const express = require('express');
var router = express.Router();
router.post('/sendNotificationToDevice', pushNotificationController.sendNotificationToDevice);
module.exports = router