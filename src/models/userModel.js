import bcrypt from 'bcrypt';
import initDatabase from '../database.js';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'; // Use a secret key from .env

export const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email }, // Payload
        SECRET_KEY, // Secret key
        { expiresIn: '24h' } // Token expiration
    );
};
let db;

// Initialize the database connection
export const init = async () => {
    db = await initDatabase();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    `);
};

export const getAllUsers = async () => {
    return await db.all(`SELECT id, email FROM users`); // Exclude passwords from the response
};

export const addUser = async (email, password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const result = await db.run(
        `INSERT INTO users (email, password) VALUES (?, ?)`,
        [email, hashedPassword]
    );
    return { id: result.lastID, email };
};

export const authenticateUser = async (email, password) => {
    const user = await db.get(`SELECT * FROM users WHERE email = ?`, [email]);
    if (user && (await bcrypt.compare(password, user.password))) {
        return { id: user.id, email: user.email };
    }
    return null;
};