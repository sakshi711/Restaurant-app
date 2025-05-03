const express = require('express');
const cors = require('cors');
const app = express();
const menuRoutes = require('./routes/menu');
app.use(cors());
app.use(express.json());
// Routes
app.use('/menu', menuRoutes);
// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});