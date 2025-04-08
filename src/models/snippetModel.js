const snippets = [];

export const addSnippet = (snippet) => {
    snippets.push(snippet);
};

export const getSnippetById = (id) => {
    return snippets.find(snippet => snippet.id === id);
};

export const getAllSnippets = () => {
    return snippets;
};

export const getSnippetsByLang = (language) => {
    return snippets.filter(snippet => snippet.language === language);
};