const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  login: String,
  fork: String,
  repos_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */obj) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
//   console.log('this is obj',obj);
//   //mongoose.
//   //app.post("/addname", (req, res) => {
//  var myData = new Repo(req.body);
//  myData.save()
// //});

}

module.exports.save = save;