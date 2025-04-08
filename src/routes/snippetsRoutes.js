const express = require('express');
const SnippetsController = require('../controllers/snippetsController');

const router = express.Router();
const snippetsController = new SnippetsController();

router.post('/snippets', snippetsController.addSnippet.bind(snippetsController));
router.get('/snippets/:id', snippetsController.getSnippetById.bind(snippetsController));
router.get('/snippets', snippetsController.getAllSnippets.bind(snippetsController));
router.get('/snippets/lang/:language', snippetsController.getSnippetsByLang.bind(snippetsController));

module.exports = router;