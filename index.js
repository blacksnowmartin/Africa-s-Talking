const sendSMS = require('./sendSMS');
const smsServer = require('./smsServer');

// Call sendSMS function
sendSMS();

// Call start sms server
smsServer();