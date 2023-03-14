// import Transaction from "../../../model/transaction";
import User from "../../model/user";
import Record from "../../model/record";

const ServiceData = {
  bgremove: {
    cost: 1,
    title: "Background Remove",
  },
};

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        // Get the user by email
        const user = await new Promise((resolve, reject) => {
          User.GetByUsername(req.body.cusEmail, (err, userData) => {
            if (err) {
              reject(err);
            } else {
              resolve(userData[0]);
            }
          });
        });

        // Check if the user has enough credit for the requested service
        if (user.credit < ServiceData[req.body.type].cost) {
          return res.status(400).send("Insufficient credit.");
        }

        // Create the transaction record in the database
        const transactionData = {
          credit: ServiceData[req.body.type].cost,
          info: ServiceData[req.body.type].title,
          type: 1,
          fk_user_id: user.id,
          created_at: new Date(),
          updated_at: new Date(),
        };
        Record.Create(transactionData, user.id, ServiceData[req.body.type].cost, (err, result) => {
          if (err) {
            return res.status(500).send("Failed to create transaction record.");
          }
          return res.status(200).send("Transaction completed successfully.");
        });
      } catch (error) {
        console.error(error);
        return res.status(500).send("Internal server error.");
      }

      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
