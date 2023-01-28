import config from './config.js';
import apiRouter from './api/index.js';     //izbacuje mi gresku kada stavim samo './api'

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello Express and EJS!'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port)
});