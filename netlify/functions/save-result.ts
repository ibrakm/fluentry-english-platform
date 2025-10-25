import { Handler } from '@netlify/functions';
import Database from 'better-sqlite3';
import path from 'path';

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { email, result } = JSON.parse(event.body || '{}');

    if (!email || !result) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing email or result' }),
      };
    }

    // Initialize database
    const dbPath = path.join('/tmp', 'fluentry.db');
    const db = new Database(dbPath);

    // Create table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS test_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        test_result TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert the test result
    const insertStmt = db.prepare(
      'INSERT INTO test_results (email, test_result) VALUES (?, ?)'
    );
    
    const info = insertStmt.run(email, result);
    db.close();

    console.log(`Saved test result for ${email}. Changes: ${info.changes}`);

    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Test result saved successfully' }),
    };
  } catch (error) {
    console.error('Error saving test result:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save test result' }),
    };
  }
};

export { handler };

