const express = require('express');
const bodyParser = require('body-parser');
const git = require('../helpers/github');
const db = require('../database/index');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
//  });

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.username, 'THIS IS REQ.BODY');
  git.getReposByUsername(req.body.username, db.save)
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  //db query
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

