class SnippetsController {
    constructor(snippetModel) {
        this.snippetModel = snippetModel;
    }

    addSnippet(req, res) {
        const snippet = req.body;
        this.snippetModel.addSnippet(snippet);
        res.status(201).json({ message: 'Snippet added successfully', snippet });
    }

    getSnippetById(req, res) {
        const { id } = req.params;
        const snippet = this.snippetModel.getSnippetById(id);
        if (snippet) {
            res.status(200).json(snippet);
        } else {
            res.status(404).json({ message: 'Snippet not found' });
        }
    }

    getAllSnippets(req, res) {
        const snippets = this.snippetModel.getAllSnippets();
        res.status(200).json(snippets);
    }

    getSnippetsByLang(req, res) {
        const { language } = req.params;
        const snippets = this.snippetModel.getSnippetsByLang(language);
        res.status(200).json(snippets);
    }
}

export default SnippetsController;