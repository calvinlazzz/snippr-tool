import initDatabase from '../database.js';

let db;

// Initialize the database connection
export const init = async () => {
    db = await initDatabase();
};

export const addSnippet = async (snippet) => {
    const { title, code, language } = snippet;
    const result = await db.run(
        `INSERT INTO snippets (title, code, language) VALUES (?, ?, ?)`,
        [title, code, language]
    );
    return { id: result.lastID, ...snippet };
};

export const getSnippetById = async (id) => {
    return await db.get(`SELECT * FROM snippets WHERE id = ?`, [id]);
};

export const getAllSnippets = async () => {
    return await db.all(`SELECT * FROM snippets`);
};

export const getSnippetsByLang = async (language) => {
    return await db.all(`SELECT * FROM snippets WHERE language = ?`, [language]);
};