const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Routes
const productRoutes = require('./routes/product');

app.use('/api/products', productRoutes);

// Run Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
