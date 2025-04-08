const snippets = [];

const addSnippet = (snippet) => {
    snippets.push(snippet);
};

const getSnippetById = (id) => {
    return snippets.find(snippet => snippet.id === id);
};

const getAllSnippets = () => {
    return snippets;
};

const getSnippetsByLang = (language) => {
    return snippets.filter(snippet => snippet.language === language);
};

module.exports = {
    addSnippet,
    getSnippetById,
    getAllSnippets,
    getSnippetsByLang
};