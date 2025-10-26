import Database from 'better-sqlite3';
import path from 'path';

// Define the path to the database file
const dbPath = path.join(process.cwd(), 'fluentry.db');
const db = new Database(dbPath);

// Initialize the database: create the table if it doesn't exist
function initDb() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS test_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      test_result TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;
  db.exec(createTableSql);
  console.log('Database initialized and test_results table ensured.');
}

initDb();

// Prepare a statement for inserting data
const insertStmt = db.prepare(
  'INSERT INTO test_results (email, test_result) VALUES (?, ?)'
);

/**
 * Saves a new test result to the database.
 * @param email The user's email.
 * @param result The test result (e.g., 'B2').
 */
export function saveTestResult(email: string, result: string) {
  try {
    const info = insertStmt.run(email, result);
    console.log(`Saved test result for ${email}. Changes: ${info.changes}`);
    return true;
  } catch (error) {
    console.error('Error saving test result:', error);
    return false;
  }
}

// Export the database instance for other operations if needed
export default db;
