const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./landing-page/home.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./landing-page/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    res.sendFile('./landing-page/contact.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`))