var axios = require('axios');
var baseUrl = 'https://api.github.com/users/';

var api = {
    getUser(gitHubUserName) {
        return axios.get(baseUrl + gitHubUserName).then(function(response) {
            return response;
        });
    }
};

module.exports = api;
