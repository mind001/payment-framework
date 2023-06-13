import uuid

def generate_token():
    # Generate a unique token using UUID
    token = str(uuid.uuid4())
    return token

# Example usage
token = generate_token()
print("Generated Token:", token)


// Required dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Create Express application
const app = express();

// Parse JSON request body
app.use(bodyParser.json());

// Simulated user database
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Authentication endpoint
app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;

  // Find user in the database
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // User is authenticated, generate and return authentication token
    const authToken = 'abc123'; // Simulated token generation
    res.json({ token: authToken });
  } else {
    // User authentication failed
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

