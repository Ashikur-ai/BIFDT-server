const pushNotificationController = require('../controllers/push-notification.controller');
const express = require('express');
var router = express.Router();
router.get('/sendNotification', pushNotificationController.sendNotification);
module.exports = router