const { ONE_SIGNAL_CONFIG } = require('../config/app.config');
const pushNotificationService = require('../services/push-notification.services');
 
exports.sendNotification = (req, res, next) => {
    var message = {
        app_id: 'b74a2e58-2d75-434b-9066-d6b6232165c7',
        contents: { en: 'Test Push Notification' },
        included_segments: ["All"],
        content_available: true,
        small_icon: 'ic_notification_icon',
        data: {
            PushTitle: 'CUSTOM NOTIFICATION'
        }
    }; 
    pushNotificationService.sendNotification(message, (err, results)=> {
        if(err){
            return next(err)
        }
        return res.status(200).send({
            message: "Success",
            data: results,
        })
    })
}

exports.sendNotificationToDevice = (req, res, next) => {
    var message = {
        app_id: 'b74a2e58-2d75-434b-9066-d6b6232165c7',
        contents: { en: 'Test Push Notification' },
        included_segments: ["included_player_ids"],
        included_player_ids: req.body.devices,
        content_available: true,
        small_icon: 'ic_notification_icon',
        data: {
            PushTitle: 'CUSTOM NOTIFICATION'
        }
    };
    pushNotificationService.sendNotification(message, (err, results)=> {
        if(err){
            return next(err)
        }
        return res.status(200).send({
            message: "Success",
            data: results,
        })
    })
}