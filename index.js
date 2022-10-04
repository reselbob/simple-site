const express = require('express');
const app = express();
const path = require("path");
const {logger} = require("./logger");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.SERVER_PORT || 8080;

app.get('/', (req, res) => {
    const fileSpec = '/public/index.html'
    logger.info(`Getting file ${fileSpec}`);
    res.sendFile(path.join(__dirname + fileSpec));
});


server = app.listen(port, () => {
    logger.info(`Node server is running on port ${port} at ${new Date()}`);
});
