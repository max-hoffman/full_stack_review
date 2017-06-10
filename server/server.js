const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes');
const db = require('./models');

app = express();

app.use(parser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

//test db connection
db.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });

const port = 8080;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});

