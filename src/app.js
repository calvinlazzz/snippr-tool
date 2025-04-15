import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // Explicitly specify the path
import express from 'express';
import bodyParser from 'body-parser';
import snippetsRoutes from './routes/snippetsRoutes.js';
import userRoutes from './routes/userRoutes.js';
import {init as initUsers} from './models/userModel.js';
import { init as initSnippets } from './models/snippetModel.js';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3002;

(async () => {
    // Initialize the database connection
    await initSnippets();
    await initUsers();
    app.use(express.static(path.resolve('frontend')));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('src/frontend/index.html')); // Serve the frontend HTML file
    });
    app.use(bodyParser.json());
    app.use('/snippets', snippetsRoutes);
    app.use('/users', userRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();