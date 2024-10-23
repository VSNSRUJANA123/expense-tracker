const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const transactionRoutes = require("./routes/transactionRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
// app.get("/", (req, res) =>
//   res.send({
//     transactions: "get data using /api/transactions",
//     category: "get data using /api/categories",
//   })
// );

app.use("/api", transactionRoutes);
app.use("/api", categoryRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
