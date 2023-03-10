//Gateway
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

