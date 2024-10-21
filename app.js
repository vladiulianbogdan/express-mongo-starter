const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

// Start server
if (process.env.NODE_ENV === 'dev') {
  app.listen(port, () => {
    console.log(`Server running on porrrrrt ${port}`);
  });
}

module.exports.handler = serverless(app);
