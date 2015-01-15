//var Bookshelf = require('bookshelf');
var mongoose = require('mongoose');
var settings = require('./settings');

var mongoURL = process.env.NODE_ENV === 'production' ? settings.prod.mongo : settings.dev.mongo;

mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Mongodb connection is ready');
});

module.exports = db;


//      link.string('url', 255);
//      link.string('base_url', 255);
//      link.string('code', 100);
//      link.string('title', 255);
//      link.integer('visits');
//      link.timestamps();

//
//db.knex.schema.hasTable('users').then(function(exists) {
//  if (!exists) {
//    db.knex.schema.createTable('users', function (user) {
//      user.increments('id').primary();
//      user.string('username', 100).unique();
//      user.string('password', 100);
//      user.timestamps();
//    }).then(function (table) {
//      console.log('Created Table', table);
//    });
//  }
//});


