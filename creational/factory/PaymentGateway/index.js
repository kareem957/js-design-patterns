// Usage

const PaymentGatewayFactory = require("./PaymentGatewayFactory");

const factory = new PaymentGatewayFactory();
const paypalGateway = factory.createPaymentGateway("paypal");
const stripeGateway = factory.createPaymentGateway("stripe");
const squareGateway = factory.createPaymentGateway("square");

console.log(paypalGateway.processPayment(100)); // Output: "Processing PayPal payment of $100"
console.log(stripeGateway.processPayment(200)); // Output: "Processing Stripe payment of $200"
console.log(squareGateway.processPayment(300)); // Output: "Processing Square payment of $300"
