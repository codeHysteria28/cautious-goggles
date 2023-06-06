const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Hello world received a request.');
});

app.listen(3000, () => console.log('Server running on port 3000'));