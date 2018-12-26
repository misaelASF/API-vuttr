const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port);
console.log(`API rodando na porta: ${port}.`);

const route = require('./routes/index');
const routeTags = require('./routes/tags');

app.use('/', route);
app.use('/api', routeTags);