router.get('/', async (req, res) => {
    console.log('📥 GET /menu hit');
    try {
      const [rows] = await db.query('SELECT * FROM menu_items ORDER BY category');
      console.log('✅ Query successful', rows);
      res.json(rows);
    } catch (err) {
      console.error('❌ Query failed:', err.message);
      res.status(500).json({ error: 'Database query failed' });
    }
  });
  
  
