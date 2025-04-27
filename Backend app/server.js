const express = require('express');
const app = express();
const PORT = 3000;

// Optional: Enable CORS if needed
// const cors = require('cors');
// app.use(cors());

// Middleware
app.use(express.json());  // If you plan to handle JSON request bodies

Routes
app.get('/', (req, res) => {
  res.send('Restaurant Backend Running!');
});

app.get('/menu', (req, res) => {
  const menu = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 8 },
  ];
  res.json(menu);  // Send menu as JSON
});

// Optional: Handle 404 for unknown routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
