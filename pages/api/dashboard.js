// import Transaction from "../../../model/transaction";
import User from "../../model/user";
import Record from "../../model/record";

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
        //Fetch Record Data
        Record.Get(
          user.id,
          (err, result) => {
            if (err) {
              return res
                .status(500)
                .send("Failed to create transaction record.");
            }
            return res
              .status(200)
              .json({result,balance:user.credit});
          }
        );
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
