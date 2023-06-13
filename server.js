const express = require('express');
const app = express();
const PORT = 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes setup
app.use('/api/authentication', require('./routes/authenticationRoutes'));
app.use('/api/accounts', require('./routes/accountRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
// Add other routes as needed

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
