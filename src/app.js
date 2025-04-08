const express = require('express');
const bodyParser = require('body-parser');
const snippetsRoutes = require('./routes/snippetsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/snippets', snippetsRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});