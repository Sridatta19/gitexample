
import express from 'express';
import path from 'path';
import methodOverride from 'method-override';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';

import searchAPI from './controllers/searchController';

const app = express();

app.use(morgan('dev'));
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/api', searchAPI);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/../client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;
