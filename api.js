var axios = require("axios");
var baseUrl = "https://api.github.com/users/"

var api = {
  getUser(gitHubUserName){
    return axios.get(baseUrl + gitHubUserName)
    .then(function (response) {
      console.log(response);
    })
  }
}

module.exports = api;
