require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');

const moment = require('moment-timezone')
moment.tz.setDefault('UTC-3')
const serialize = require('serialize-javascript')

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  let template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  res.send(template);

});

let events = [
	{description: "meu teste 1", date: moment().subtract(1, 'days')},
	{description: "meu teste 2", date: moment().subtract(4, 'days')},
	{description: "meu teste 3", date: moment().add(2, 'days')},
	{description: "meu teste 4", date: moment().subtract(1, 'days')}
]

app.get('/events', (req, res) =>{
	res.send( serialize(events) );
})

app.use(require('body-parser').json())
app.post('/events', (req, res) => {
	events.push(req.body)
	console.log(events)
	res.sendStatus(200)
})

const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  const reload = require('reload');
  const reloadServer = reload(server, app);
  require('./webpack-dev-middleware').init(app);
}

server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
