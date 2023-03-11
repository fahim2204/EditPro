import pool from "../lib/dbConnect.js";

export default {
  // GetAll:(callback) => {
  //     pool.query("SELECT * FROM transaction", callback);
  // },
  // GetAllWithMachine:(callback) => {
  //     pool.query("SELECT transaction.*, machine.machine_mac FROM transaction JOIN machine ON transaction.fk_machine_id = machine.machine_id", callback);
  // },
  // GetByMachineId:(id, callback) => {
  //     pool.query("SELECT * FROM transaction WHERE fk_machine_id = ?", [id], callback);
  // },
  // GetByUserId:(id, callback) => {
  //     pool.query("SELECT transaction.fk_machine_id, machine.machine_mac,transaction.status FROM transaction JOIN machine ON transaction.fk_machine_id = machine.machine_id WHERE fk_user_id = ?", [id], callback);
  // },
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
  // Delete:(id, callback) => {
  //     pool.query("DELETE FROM transaction WHERE fk_machine_id = ?", [id], callback);
  // },
  // DeleteWithUserMachine:(userId,machineId, callback) => {
  //     pool.query("DELETE FROM transaction WHERE fk_machine_id = ? AND fk_user_id=?", [machineId,userId], callback);
  // }
};
