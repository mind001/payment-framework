const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/banking_system';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

module.exports = { connectToDatabase };
