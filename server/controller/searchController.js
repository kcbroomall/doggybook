console.log('loading... searchController.js');

var db = require('../../app/config');

var User = require('../../app/models/user');
var Dog = require('../../app/models/dog');
var Walker = require('../../app/models/walker');

var Users = require('../../app/collections/users');
var Dogs = require('../../app/collections/dogs');
var Walkers = require('../../app/collections/walkers');

module.exports = {
  getAllUsers: function(req, res) {
    console.log('getting user data!');
    console.log('req.params: ', req.params);

    // search the db for all users
    .fetch()
    .then(function(user) {
      if (!user) {
        // if !found, do... something?
        console.log('user not found!');
        res.redirect('/'); // PLACEHOLDER
        // res.send();  // should probably send something else
      } else {
        // if found: grab the user profile data
        Object.assign(profile, user.toJSON());
        var userId = user.get('userId');

        if (user.get('isDog')) {
          new Dog({userId: userId}).fetch()
          .then(function(dog) {
            Object.assign(profile, dog.toJSON());
          });
        } else {
          new Walker({userId: userId}).fetch()
          .then(function(walker) {
            Object.assign(profile, walker.toJSON());
          });
        }
        // build a bookshelf query and search the appropriate table
        // res.redirect('/'); // PLACEHOLDER
        res.send(profile);
      }
    });
  }
}
