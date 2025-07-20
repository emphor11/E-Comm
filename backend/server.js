const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enhanced CORS configuration (optional - only if you face issues)
const corsOptions = {
  origin: [
    'http://localhost:3000',  // React development server
    'http://localhost:3001',  // Alternative React port
    'http://127.0.0.1:3000',  // Alternative localhost format
  ],
  credentials: true,  // Allow cookies and authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

// OR use the simple version (what you currently have - works fine!)
// app.use(cors());

app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB Connected');
  app.listen(3001, () => console.log('Server running on port 3001'));
}).catch(err => console.log(err));