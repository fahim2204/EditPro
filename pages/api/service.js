// import Transaction from "../../../model/transaction";
import User from "../../model/user";
import Record from "../../model/record";

const ServiceData = {
  bgremove: {
    cost: 1,
    title: "Background Remove",
  },
  facecut:{
    cost: 1,
    title: "Face Cutout",
  },
  enhance:{
    cost: 2,
    title: "Photo Enhance",
  },
  colorize:{
    cost: 2,
    title: "Photo Colorize",
  },
  cartoon:{
    cost: 1,
    title: "Cartoon Selfie",
  },
  correction:{
    cost: 1,
    title: "Color Correction",
  },
  ai:{
    cost: 6,
    title: "AI Art Generation",
  },
  passport:{
    cost: 2,
    title: "Passport Photo",
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
          return res
            .status(200)
            .json({ success: false, msg: "Insufficient credit." });
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
        Record.Create(
          transactionData,
          user.id,
          ServiceData[req.body.type].cost,
          (err, result) => {
            if (err) {
              return res
                .status(500)
                .send("Failed to create transaction record.");
            }
            return res
              .status(200)
              .json({ success: true, msg: "Image Downloaded" });
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
