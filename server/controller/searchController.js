console.log('loading... searchController.js');

var db = require('../../app/config');

var User = require('../../app/models/user');
var Dog = require('../../app/models/dog');
var Walker = require('../../app/models/walker');

var Users = require('../../app/collections/users');
var Dogs = require('../../app/collections/dogs');
var Walkers = require('../../app/collections/walkers');

module.exports = {
  getAllUsers: function(req, res, next) {
    console.log('getAllUsers! req.body: ', req.body);

    var allUsers = [];

    Dog.fetchAll()
    .then(function(allDogs) {
      Walker.fetchAll()
      .then(function(allWalkers) {
        allDogs.forEach(dog => allUsers.push(dog.toJSON()));
        allWalkers.forEach(walker => allUsers.push(walker.toJSON()));
        res.send(allUsers);
        console.log('all users: ', allUsers);
      });
    });
      // IMPORTANT still need to remove password hash out of 'allUsers'
  }

    // if (req.body === 'Dogs') {
    //   console.log('specifically dogs!');
    //   Dogs.fetchAll()
    //   .then(function(allDogs) {
    //     return allDogs;
    //   });
    // } else if (req.body === 'Dog Walkers') {
    //   console.log('specifically walkers!');
    //   Walkers.fetchAll()
    //   .then(function(allWalkers) {
    //     return allWalkers;
    //   });
    // } else {
    //   console.log('searching for: ' + req.body + ' not yet implemented');
    // }
    // console.log('searching for: ' + req.body + ' not yet implemented');

}
