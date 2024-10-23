
# Personal Expense Tracker - RESTful API

This project is a **Personal Expense Tracker** that allows users to manage their financial records by adding income and expense transactions. It provides a simple RESTful API built with **Node.js** and **MongoDB** for storing and retrieving transaction data.

## Features

- Add income and expense transactions
- Retrieve all transactions or individual transactions by ID
- Update and delete transactions
- Get a summary of total income, total expenses, and balance
- Categorize transactions by type (income or expense)
- Optionally, filter summaries by date range or category

## Tools and Technologies

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (NoSQL)
- **ORM**: Mongoose
- **Environment Variables**: Dotenv
- **Body Parsing**: body-parser

## Installation and Setup

### Prerequisites

Make sure you have **Node.js** and **MongoDB** installed on your machine.

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/expense-tracker.git
    cd expense-tracker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the project root and add the following:
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

The API will now be running at `http://localhost:5000`.

## API Endpoints

### Transactions

| Method | Endpoint                 | Description                         |
|--------|--------------------------|-------------------------------------|
| POST   | `/api/transactions`       | Add a new transaction               |
| GET    | `/api/transactions`       | Get all transactions                |
| GET    | `/api/transactions/:id`   | Get a specific transaction by ID    |
| PUT    | `/api/transactions/:id`   | Update a specific transaction by ID |
| DELETE | `/api/transactions/:id`   | Delete a specific transaction by ID |

#### Example POST Request (Adding a Transaction)

```json
POST /api/transactions
{
    "type": "expense",
    "category": "Groceries",
    "amount": 50,
    "description": "Bought weekly groceries"
}
```

### Categories

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | `/api/categories`   | Add a new category        |
| GET    | `/api/categories`   | Get all categories        |

#### Example POST Request (Adding a Category)

```json
POST /api/categories
{
    "name": "Salary",
    "type": "income"
}
```

### Summary

| Method | Endpoint         | Description                    |
|--------|------------------|--------------------------------|
| GET    | `/api/summary`    | Get a summary of transactions  |

#### Example Response (Summary)

```json
{
    "totalIncome": 5000,
    "totalExpense": 3000,
    "balance": 2000
}
```


## Error Handling

All endpoints provide error handling for common issues like:
- Invalid input (e.g., missing required fields)
- Transaction or category not found
- Database connection errors

## Future Improvements (Optional)

- **User Authentication**: Secure routes using JWT tokens.
- **Pagination**: Add pagination for large datasets (e.g., `/transactions` endpoint).
- **Reports**: Implement monthly or yearly reports for spending by category.
- **Frontend**: Develop a frontend for easier interaction with the API.
