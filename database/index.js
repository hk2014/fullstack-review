const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type:String, index:{unique: true }},
  name: String,
  login: String,
  forks_count: Number,
  html_url: String,
  owner: String
  //watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);
var newRepo;

let save = (repos) => {
	//console.log('name:', reqBody[0].owner.login);
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
//   console.log('this is obj',obj);
//   //mongoose.
//   //app.post("/addname", (req, res) => {
 repos.forEach(function(repo){
 	//console.log(repo.id);
 
	    newRepo = new Repo({
	 	id: repo.id ,
	 	name:repo.name ,
	 	login: repo.owner.login,
	 	forks_count: repo.forks_count,
	 	html_url: repo.html_url,
	 	owner: repo.owner.avatar_url

	 	//watchers: repo.watchers_count
	 });
	  newRepo.save()

 });
}
let get = (callback) => {
	Repo.find().sort({forks_count: -1}).limit(25).exec(function (err, results) {
		if (err){
			throw err;
			//callback(err);
		}else{
			callback(err,results);
		}
	})
}

module.exports.save = save;
module.exports.get = get;