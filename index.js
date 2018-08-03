const express = require('express');
const parser = require('body-parser');
const path = require('path');
const request = require('request');

const proxy = express();

const port = 8000;
proxy.use(parser.json());
proxy.use(parser.urlencoded({extended: false}));

proxy.use(express.static(path.join(__dirname, './')))

proxy.get('/bundle.js/3001', (req, res) => {
  request('http://localhost:3001/bundle.js', (err, response, body) => {
    if(err) {
      console.log(err)
    } else {
      res.status(200).send(body);
    }
  })
})

proxy.use('/main', (req, res) => {
  request('http://localhost:3001/main', (err, response, body) => {
    if(err) {
      console.log(err)
    }
      res.status(200).send(body);
  })
})

proxy.get('/bundle.js/3010', (req, res) => {
  request('http://localhost:3010/bundle.js', (err, response, body) => {
    if(err) {
      console.log(err)
    } else {
      res.status(200).send(body);
    }
  })
})

proxy.use('/api/reviews', (req, res) => {
  request('http://localhost:3010/api/reviews', (err, response, body) => {
    if(err) {
      console.log(err)
    }
      res.status(200).send(body);
  })
})

proxy.get('/bundle.js/9001', (req, res) => {
  request('http://localhost:9001/bundle.js', (err, response, body) => {
    if(err) {
      console.log(err)
    } else {
      res.status(200).send(body);
    }
  })
})

proxy.use('/api/yelp', (req, res) => {
  request('http://localhost:9001/api/yelp', (err, response, body) => {
    if(err) {
      console.log(err)
    }
      res.status(200).send(body);
  })
})

proxy.get('/bundle.js/3005', (req, res) => {
  request('http://localhost:3005/bundle.js', (err, response, body) => {
    if(err) {
      console.log(err)
    } else {
      res.status(200).send(body);
    }
  })
})

proxy.use('/api/restaurantList', (req, res) => {
  request('http://localhost:3005/api/restaurantList', (err, response, body) => {
    if(err) {
      console.log(err)
    }
      res.status(200).send(body);
  })
})


proxy.listen(port, () => console.log(`Server is listening on port ${port}`));