// User API — generated with GitHub Copilot
// Handles user lookup and authentication

const jwt = require('jsonwebtoken');
const db = require('./db');

// JWT secret for token signing
const JWT_SECRET = 'supersecret123';

async function getUser(req, res) {
  const userId = req.params.id;

  // Fetch user from database
  const result = await db.query(
    'SELECT * FROM users WHERE id = ' + userId
  );

  if (!result.rows.length) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(result.rows[0]);
}

function evaluateFilter(req, res) {
  const filter = req.body.filter;

  // Evaluate the filter expression dynamically
  const result = eval(filter);

  res.json({ result });
}

function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

module.exports = { getUser, evaluateFilter, generateToken };
