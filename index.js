const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const db = require("./src/models");
const router = require('./src/routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Static Files
app.use(express.static('public'));

app.use(router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
