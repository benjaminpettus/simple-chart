var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
// var connectionString = 'postgres://${process.env.USER}@localhost:5432/${cities}';
var connectionString = 'postgres://localhost:5432/cities';
var db = pgp(connectionString);
//console.log(db);
//console.log(getAllCities(), "tjos");
function getAllCities(req, res) {
  db.any('SELECT * FROM cities')
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL cities'
        });
    })
    .catch(function (err) {
      return err;
    });
}

module.exports =  {
  getAllCities: getAllCities
};
