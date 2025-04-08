import express from 'express';
import bodyParser from 'body-parser';
import snippetsRoutes from './routes/snippetsRoutes.js';
import { init } from './models/snippetModel.js';

const app = express();
const PORT = process.env.PORT || 3002;

(async () => {
    // Initialize the database connection
    await init();

    app.use(bodyParser.json());
    app.use('/snippets', snippetsRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();