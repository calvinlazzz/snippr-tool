import SnippetsController from '../controllers/snippetsController.js';
import * as snippetModel from '../models/snippetModel.js'; // Import all named exports
import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js'; // Import the middleware


const router = express.Router();
const snippetsController = new SnippetsController(snippetModel); // Pass snippetModel to the controller


router.post('/', authenticateToken, snippetsController.addSnippet.bind(snippetsController));
router.get('/:id', authenticateToken, snippetsController.getSnippetById.bind(snippetsController));
router.get('/', authenticateToken, snippetsController.getAllSnippets.bind(snippetsController));
router.get('/lang/:language', authenticateToken, snippetsController.getSnippetsByLang.bind(snippetsController));

export default router;