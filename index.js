const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: 'https://frontend-task-30.vercel.app/', // Allow all origins for testing; adjust in production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/submit', (req, res) => {
    console.log("Received Data:", req.body);
    res.json({
        received: req.body
    });
});

// Start the server locally (for testing)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // for Vercel
