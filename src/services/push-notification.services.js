
const { ONE_SIGNAL_CONFIG } = require('../config/app.config');
const sendNotification = async (data, callback) => {
    var headers = {
        "Content-Type": 'application/json; charset=utf-8',
        Authorization: `Basic ${ONE_SIGNAL_CONFIG.API_KEY}`,
    } 
    var options = {
        host: 'onesignal.com',
        port: 443,
        path: '/api/v1/notifications',
        method: 'POST',
        headers: headers
    }
    var https = require('https');
    var request = https.request(options, (res) => {
        res.on('data', (data) => {
            console.log('line 18', JSON.parse(data));
            return callback(null, JSON.parse(data))

        })
    })
    request.on('error', (e) => {
        return callback({
            message: e
        })
    })

    request.write(JSON.stringify(data));
    request.end()
};
module.exports = { sendNotification }