// Usage

const NotificationFactory = require('./NotificationFactory');

const factory = new NotificationFactory();

// Email Notification
const emailNotification = factory.createNotification();
console.log(emailNotification.send());

// SMS Notification
const smsNotification = factory.createNotification();
console.log(smsNotification.send());

// Push Notification
const pushNotification = factory.createNotification();
console.log(pushNotification.send());
