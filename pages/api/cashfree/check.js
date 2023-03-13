import Transaction from "../../../model/transaction";
import User from "../../../model/user";

const { PaymentGateway } = require("@cashfreepayments/cashfree-sdk");

const pg = new PaymentGateway({
  env: "TEST",
  apiVersion: "2022-09-01",
  appId: process.env.CASHFREE_APP_ID,
  secretKey: process.env.CASHFREE_SECRET,
});

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      pg.orders
        .getStatus({
          orderId: req.body.orderId, // required
        })
        .then((data) => {
          //Write
          if (data.orderStatus === "PAID" && data.txStatus === "SUCCESS") {
            User.UpdateCredit(req.body.orderId, (err, res) => {
              // Status 1 = PAID; ADD Credit to Profile
              Transaction.Update({ status: 1, updated_at: new Date() }, req.body.orderId, () => {});
            });
          } else {
            Transaction.Update({ status: 2, updated_at: new Date() }, req.body.orderId, () => {});
          }
          res.status(200).json(data);
        })
        .catch((error) => res.status(500).json(error));
      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
