console.log('loading db...');
var dbconfig = require('../env/db');
// console.log(dbconfig);

var path = require('path');
var knex = require('knex')(dbconfig);
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users')
.then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('email', 100).unique();
      user.string('password', 100);
      user.string('type', 10);
      user.timestamps();
    }).then(function(table) {
      console.log(`Created 'users' Table`);
    });
  }
});

db.knex.schema.hasTable('dogs')
.then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('dogs', function(dog) {
      // structure of dog db object to be fleshed out further
      dog.increments('id').primary();
      dog.string('name', 100);
      dog.string('address', 100);
      dog.string('zip', 100);
      dog.string('imgurl', 100);
      dog.string('price', 100);
      dog.integer('userId').unsigned();
      dog.foreign('userId').references('users.id');
      dog.timestamps();
    }).then(function(table) {
      console.log(`Created 'dogs' Table`);
    });
  }
});

db.knex.schema.hasTable('walkers')
.then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('walkers', function(walker) {
      // structure of walker db object to be fleshed out further
      walker.increments('id').primary();
      walker.string('name', 100);
      walker.string('address', 100);
      walker.string('zip', 100);
      walker.string('imgurl', 100);
      walker.string('price', 100);
      walker.integer('userId').unsigned();
      walker.foreign('userId').references('users.id');
      walker.timestamps();
    }).then(function(table) {
      console.log(`Created 'walkers' Table`);
    });
  }
});

module.exports = db;
