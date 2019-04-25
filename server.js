'use strict';

const express = require('express')

//Constants
const PORT = 8090;
const HOST = '0.0.0.0';

//App

const app = express();
app.get('/test/', (eq, res) => {
	res.send('Hello World\n');
});

app.use(express.static('public'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
