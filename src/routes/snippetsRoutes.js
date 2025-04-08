import SnippetsController from '../controllers/snippetsController.js';
import * as snippetModel from '../models/snippetModel.js'; // Import all named exports
import express from 'express';


const router = express.Router();
const snippetsController = new SnippetsController(snippetModel); // Pass snippetModel to the controller

router.post('/', snippetsController.addSnippet.bind(snippetsController));
router.get('/:id', snippetsController.getSnippetById.bind(snippetsController));
router.get('/', snippetsController.getAllSnippets.bind(snippetsController));
router.get('/lang/:language', snippetsController.getSnippetsByLang.bind(snippetsController));

export default router;