// Usage

const NotificationFactory = require('./NotificationFactory');

const factory = new NotificationFactory();

// Email Notification
const emailNotification = factory.createNotification("email");
console.log(emailNotification.send());

// SMS Notification
const smsNotification = factory.createNotification("sms");
console.log(smsNotification.send());

// Push Notification
const pushNotification = factory.createNotification("push");
console.log(pushNotification.send());
