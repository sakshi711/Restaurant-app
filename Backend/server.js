const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Node.js Backend!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
