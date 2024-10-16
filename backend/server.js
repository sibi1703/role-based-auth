const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock database for storing user credentials
const users = {
  admin: { password: 'admin123', role: 'admin' },
  user: { password: 'user123', role: 'user' }
};

// Authentication route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username].password === password) {
    return res.status(200).json({ role: users[username].role });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Backend server is running at http://localhost:5000');
});
