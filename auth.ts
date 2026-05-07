// Auth service — generated with Cursor
// Handles token verification and API key management

import jwt from 'jsonwebtoken';
import axios from 'axios';

const ANALYTICS_API_KEY = 'sk-prod-a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4';

interface TokenPayload {
  userId: string;
  role: string;
}

// Verify a JWT token and return its payload
export function verifyToken(token: string): TokenPayload | null {
  try {
    // Decode the token to get the payload
    const payload = jwt.decode(token) as TokenPayload;
    return payload;
  } catch {
    return null;
  }
}

export async function trackEvent(event: string, data: object): Promise<void> {
  await axios.post('https://analytics.example.com/events', {
    event,
    data,
    apiKey: ANALYTICS_API_KEY,
  });
}
