const Transaction = require("../models/Transaction");
const Category = require("../models/Category");

const addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    const transaction = new Transaction({
      type,
      category,
      amount,
      date,
      description,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { type, category, amount, date, description },
      { new: true }
    );
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });
    res.json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    const balance = income - expense;
    res.json({ totalIncome: income, totalExpense: expense, balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getSummary,
};
