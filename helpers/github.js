const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, saveDb) => {
  //console.log('user', username);
  // TODO - Use the request module to request repos for a specific
  // user from the github API
 
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  console.log('username is:', username);
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos' ,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

request(options, function(err, res, json) {
  if (err) {
    throw err;
  }
  console.log("api:",json);
  saveDb(JSON.parse(json));
})

}

module.exports.getReposByUsername = getReposByUsername;