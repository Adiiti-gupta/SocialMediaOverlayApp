// Import required modules
const express = require('express');  // Import Express.js
const dotenv = require('dotenv');   // Import dotenv to manage environment variables
const cors = require('cors');       // Import CORS for handling cross-origin requests

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());          // Enable CORS for all routes

// Set up a basic route
app.get('/', (req, res) => {
    res.send({ message: 'API is running successfully' });
});

// Example route (replace with your actual routes)
app.get('/api/data', (req, res) => {
    res.json({
        message: 'This is sample data from the backend',
        data: [1, 2, 3, 4, 5],
    });
});

// Get the port from the environment variables or use 5000 as a default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});