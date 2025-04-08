import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

// Open the database connection
const initDatabase = async () => {
    const db = await open({
        filename: path.resolve('src', 'snippets.db'), // Use an absolute path
        driver: sqlite3.Database
    });

    // Create the "snippets" table if it doesn't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS snippets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            code TEXT NOT NULL,
            language TEXT NOT NULL
        )
    `);

    return db;
};

export default initDatabase;