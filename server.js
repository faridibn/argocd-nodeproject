const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// API endpoints
app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' }
    ]
  });
});

app.post('/api/users', (req, res) => {
  res.status(201).json({
    message: 'User created',
    user: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
