const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

const sampleRouter = require('./routes/sample.router')

app.use(express.json());

app.use('/sample', sampleRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

