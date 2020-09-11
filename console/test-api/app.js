const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const app = express()
const port = 3100

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const getData = (timeout=1000) => {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
        resolve({data: [1, 2, 3], timeout: timeout});
        }, timeout);
    });
}

const dataMap = {
  news: {
    ticketList: [
      {id:0, service:'news', ticket: 'news', template: 'news_default'}
      , {id:1, service:'news', ticket: 'news', template: 'news_a'}
      , {id:2, service:'news', ticket: 'news', template: 'news_b'}
      , {id:3, service:'news', ticket: 'news', template: 'news_c'}
      , {id:4, service:'news', ticket: 'news', template: 'news_d'}
    ]
  }
}
const getServiceData = (service, timeout=1000) => {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
        resolve(dataMap[service]);
        }, timeout);
    });
}

app.get('/test', async function(req, res) {
    const timeout = req.query.timeout;
    const data = await getData(timeout);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

app.get('/service', async function(req, res) {
  const timeout = req.query.timeout;
  const service = req.query.service;
  const data = await getServiceData(service, timeout);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})