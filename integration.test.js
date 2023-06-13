// File: app.js (backend)

const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
  const users = ['John', 'Jane', 'Alice'];
  res.json(users);
});

module.exports = app;

// File: integration.test.js

const request = require('supertest');
const app = require('./app');

describe('Integration tests', () => {
  test('should get a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(['John', 'Jane', 'Alice']);
  });
  
  test('should return 404 for a non-existent route', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.status).toBe(404);
  });
});

//

npm install --save-dev supertest
npx jest integration.test.js
