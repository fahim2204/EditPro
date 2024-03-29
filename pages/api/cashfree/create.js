import Transaction from "../../../model/transaction";
import User from "../../../model/user";
const { PaymentGateway } = require("@cashfreepayments/cashfree-sdk");

const pg = new PaymentGateway({
  env: "PRODUCTION",
  apiVersion: "2022-09-01",
  appId: process.env.CASHFREE_APP_ID,
  secretKey: process.env.CASHFREE_SECRET,
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
          returnUrl: `https://www.editpro.ai/api/cashfree/payment/${_orderId}`, // required
          // returnUrl: `http://localhost:3000/api/cashfree/payment/${_orderId}`, // required
          // notifyUrl: `http://localhost:3000/api/cashfree/order/${req.body.cusEmail}`,
        })
        .then(async (data) => {
          // Get the user
          const _user = await new Promise((resolve, reject) => {
            User.GetByUsername(req.body.cusEmail, (err, userData) => {
              if (err) {
                reject(err);
              } else {
                resolve(userData[0]);
              }
            });
          });
          // Create data object for DB
          const transactionData = {
            credit: req.body.credit,
            price: req.body.amount,
            order_id: _orderId,
            status: 0,
            fk_user_id: _user.id,
            created_at: new Date(),
            updated_at: new Date(),
          };
          // Keep track of the order for later
          Transaction.Create(transactionData, () => {});

          // Send The Data to client
          res.status(200).json(data);
        })
        .catch((error) => res.status(400).json(error));
      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
