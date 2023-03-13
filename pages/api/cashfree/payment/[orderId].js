import Transaction from "../../../../model/transaction";
import User from "../../../../model/user";

const { PaymentGateway } = require("@cashfreepayments/cashfree-sdk");

const pg = new PaymentGateway({
  env: "TEST",
  apiVersion: "2022-09-01",
  appId: process.env.CASHFREE_APP_ID,
  secretKey: process.env.CASHFREE_SECRET,
});

export default async (req, res) => {
  const { method } = req;
  const {orderId} = req.query;

  switch (method) {
    case "POST":
      pg.orders
        .getStatus({
          orderId: orderId, // required
        })
        .then((data) => {
          //Write
          console.log("data>>",data);
          if (data.orderStatus === "PAID" && data.txStatus === "SUCCESS") {
            User.UpdateCredit(orderId, (err, ress) => {
              // Status 1 = PAID; ADD Credit to Profile
              Transaction.Update({ status: 1, updated_at: new Date() }, orderId, () => {});
              res.redirect("/payment/success")
            });
          } else {
            Transaction.Update({ status: 2, updated_at: new Date() }, orderId, () => {});
            res.redirect("/payment/failed")
          }
        })
      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
