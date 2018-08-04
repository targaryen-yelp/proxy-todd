const express = require('express');
const parser = require('body-parser');
const path = require('path');
const request = require('request');

const proxy = express();

const port = 8000;
proxy.use(parser.json());
proxy.use(parser.urlencoded({extended: false}));

proxy.use(express.static(path.join(__dirname, './')))




proxy.listen(port, () => console.log(`Server is listening on port ${port}`));