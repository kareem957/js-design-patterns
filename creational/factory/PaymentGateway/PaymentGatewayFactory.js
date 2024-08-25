class PayPal {
    processPayment(amount) {
        return `Processing PayPal payment of $${amount}`;
    }
}

class Stripe {
    processPayment(amount) {
        return `Processing Stripe payment of $${amount}`;
    }
}

class Square {
    processPayment(amount) {
        return `Processing Square payment of $${amount}`;
    }
}

class PaymentGatewayFactory {
    createPaymentGateway(type) {
        switch (type) {
            case "paypal":
                return new PayPal();
            case "stripe":
                return new Stripe();
            case "square":
                return new Square();
            default:
                throw new Error("Unknown payment gateway");
        }
    }
}

module.exports = PaymentGatewayFactory;
