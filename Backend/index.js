const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your RDS credentials
const db = mysql.createPool({
  host: process.env.DB_HOST,     // e.g. your-db.abcdefghij.us-east-1.rds.amazonaws.com
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Fetch menu items
app.get('/menu', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM menu_items ORDER BY category');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching menu:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add menu item
app.post('/menu', async (req, res) => {
  const { name, description, price, image_url, category } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO menu_items (name, description, price, image_url, category) VALUES (?, ?, ?, ?, ?)',
      [name, description, price, image_url, category]
    );
    res.status(201).json({ message: 'Item added', id: result.insertId });
  } catch (err) {
    console.error('Insert failed:', err);
    res.status(500).json({ error: 'Failed to insert item' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

