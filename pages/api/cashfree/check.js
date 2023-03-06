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
      pg.orders
        .getStatus({
          orderId: req.body.orderId, // required
        })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(200).json(error));
      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
