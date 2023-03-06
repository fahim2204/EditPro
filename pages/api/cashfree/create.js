const { PaymentGateway } = require("@cashfreepayments/cashfree-sdk");

const pg = new PaymentGateway({
  env: "TEST",
  apiVersion: "2022-09-01",
  appId: "148606101e30c82e4fd835fe86606841",
  secretKey: "cfd216ab07882f4310d4daffda9ac1f96c4be0a5",
});

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      const _orderId = "EP" + Date.now();
      pg.orders
        .createOrders({
          orderId: _orderId, // required
          orderAmount: req.body.amount, // required
          orderCurrency: "INR",
          customerName: req.body.cusName, // required
          customerPhone: "9111122222", // required
          customerEmail: req.body.cusEmail, // required
          returnUrl: `http://localhost:3000/payment/${_orderId}`, // required
          // notifyUrl: `http://localhost:3000/api/cashfree/order/${req.body.cusEmail}`,
        })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json(error));
      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
