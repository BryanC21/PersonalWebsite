//Gateway
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'portfolio', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'build', 'index.html'));
});

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

