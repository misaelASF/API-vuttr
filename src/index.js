const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port);
console.log(`API rodando na porta: ${port}.`);

const route = require('./routes/index');
const user = require('./routes/user');

app.use('/', route);
app.use('/', user);