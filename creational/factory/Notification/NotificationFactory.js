class EmailNotification {
    send() {
        return "Sending an Email Notification";
    }
}

class SMSNotification {
    send() {
        return "Sending an SMS Notification";
    }
}

class PushNotification {
    send() {
        return "Sending an Push Notification";
    }
}

class NotificationFactory {
    createNotification(type) {
        switch(type) {
            case "email": 
                return new EmailNotification();
            case "sms": 
                return new SMSNotification();
            case "push": 
                return new PushNotification();
            default: 
                throw new Error('Invalid Notification type');
        }
    }
}

module.exports = NotificationFactory;