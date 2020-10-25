var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "prototype123",
  database: "rental"
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM property;", function (err, result, fields) {
    if (err) throw err;
    router.get('/', function (req, res, next) {
      res.json({
        data: result
      });
    });

    router.post('/priceComparison', function (req, res) {
      if (result) {
        res.status(200).json({ data: result })
      } else {
        res.status(200).send({
          message: "User not found!!"
        })
      }
    })
  });
});


module.exports = router;
