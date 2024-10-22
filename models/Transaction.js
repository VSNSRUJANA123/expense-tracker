const mongodb = require("mongoose");
const TransactionSchema = new mongodb.Schema({
  type: {
    type: String,
    required: true,
    enum: ["income", "expenses"],
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
});
module.exports = mongodb.model("Transaction", TransactionSchema);
