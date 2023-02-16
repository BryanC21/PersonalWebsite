//Gateway
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

