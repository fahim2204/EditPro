import pool from "../lib/dbConnect.js";

export default {
  Create: (transactionData, callback) => {
    pool.query("INSERT INTO transaction SET ?", transactionData, callback);
  },
  Update: (transactionData, id, callback) => {
    pool.query(
      "UPDATE transaction SET ? WHERE order_id = ?",
      [transactionData, id],
      callback
    );
  },
};
