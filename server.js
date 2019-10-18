const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('landing-page'));

app.use('/public', express.static('landing-page'));

app.listen(port, () => console.log(`listening on port ${port}!`));