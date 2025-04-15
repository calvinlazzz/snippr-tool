import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // Explicitly specify the path
import initDatabase from '../database.js';
import crypto from 'crypto';

let db;

// Initialize the database connection
export const init = async () => {
    db = await initDatabase();
};

// Encryption and decryption helpers

const algorithm = 'aes-256-cbc';
const key = process.env.ENCRYPTION_KEY; 
if (!key || key.length !== 32) {
    throw new Error('ENCRYPTION_KEY must be defined and exactly 32 characters long');
}
const encrypt = (text) => {
    const iv = crypto.randomBytes(16); // Generate a random 16-byte initialization vector
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { encryptedData: encrypted, iv: iv.toString('hex') }; // Return the encrypted data and the IV as a hex string
};

const decrypt = (encryptedData, iv) => {
    if (!encryptedData || !iv) {
        throw new Error("Missing encrypted data or IV for decryption");
    }

    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

export const addSnippet = async (snippet) => {
    const { title, code, language } = snippet;
    const { encryptedData, iv } = encrypt(code);
    const result = await db.run(
        `INSERT INTO snippets (title, code, language, iv) VALUES (?, ?, ?, ?)`,
        [title, encryptedData, language, iv]
    );
    return { id: result.lastID, ...snippet };
};

export const getAllSnippets = async () => {
    const snippets = await db.all(`SELECT * FROM snippets`);
    return snippets.map((snippet) => ({
        ...snippet,
        code: decrypt(snippet.code, snippet.iv),
    }));
};

export const getSnippetById = async (id) => {
    const snippet = await db.get(`SELECT * FROM snippets WHERE id = ?`, [id]);
    if (snippet) {
        snippet.code = decrypt(snippet.code, snippet.iv);
    }
    return snippet;
};

export const getSnippetsByLang = async (language) => {
    return await db.all(`SELECT * FROM snippets WHERE language = ?`, [language]);
};