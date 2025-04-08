class SnippetsController {
    constructor(snippetModel) {
        this.snippetModel = snippetModel;
    }

    async addSnippet(req, res) {
        try {
            const snippet = req.body;
            const newSnippet = await this.snippetModel.addSnippet(snippet);
            res.status(201).json({ message: 'Snippet added successfully', snippet: newSnippet });
        } catch (error) {
            res.status(500).json({ message: 'Error adding snippet', error: error.message });
        }
    }

    async getSnippetById(req, res) {
        try {
            const { id } = req.params;
            const snippet = await this.snippetModel.getSnippetById(id);
            if (snippet) {
                res.status(200).json(snippet);
            } else {
                res.status(404).json({ message: 'Snippet not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving snippet', error: error.message });
        }
    }

    async getAllSnippets(req, res) {
        try {
            const snippets = await this.snippetModel.getAllSnippets();
            console.log("Retrieved snippets:", snippets); // Debugging log

            res.status(200).json(snippets);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving snippets', error: error.message });
        }
    }

    async getSnippetsByLang(req, res) {
        try {
            const { language } = req.params;
            const snippets = await this.snippetModel.getSnippetsByLang(language);
            res.status(200).json(snippets);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving snippets by language', error: error.message });
        }
    }
}

export default SnippetsController;