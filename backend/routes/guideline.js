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
  con.query("SELECT * FROM guideline;", function (err, result, fields) {
    if (err) throw err;

    // router.get('/stl', function (req, res, next) {
    //   res.send(result);
    // });
    router.get('/', function (req, res, next) {
      res.json({
        data: result
      });
    });

    router.post('/guideline', function (req, res) {
      if (result) {
        res.status(200).json({ data: result })
      } else {
        res.status(200).send({
          message: "Guideline not found!!"
        })
      }
    })
  });

  con.query("SELECT * FROM guideline Where RP_Id = 10;", function (err, result, fields) {
    if (err) throw err;

    // router.get('/stl', function (req, res, next) {
    //   res.send(result);
    // });
    router.get('/stl', function (req, res, next) {
      res.json({
        data: result
      });
    });

    router.post('/guideline/stl', function (req, res) {
      if (result) {
        res.status(200).json({ data: result })
      } else {
        res.status(200).send({
          message: "Guideline not found!!"
        })
      }
    })
  });

  con.query("SELECT * FROM guideline Where RP_Id = 1;", function (err, result, fields) {
    if (err) throw err;

    // router.get('/stl', function (req, res, next) {
    //   res.send(result);
    // });
    router.get('/rmo', function (req, res, next) {
      res.json({
        data: result
      });
    });

    router.post('/guideline/rmo', function (req, res) {
      if (result) {
        res.status(200).json({ data: result })
      } else {
        res.status(200).send({
          message: "Guideline not found!!"
        })
      }
    })
  });

  con.query("SELECT * FROM guideline Where RP_Id = 14;", function (err, result, fields) {
    if (err) throw err;

    // router.get('/stl', function (req, res, next) {
    //   res.send(result);
    // });
    router.get('/lb', function (req, res, next) {
      res.json({
        data: result
      });
    });

    router.post('/guideline/lb', function (req, res) {
      if (result) {
        res.status(200).json({ data: result })
      } else {
        res.status(200).send({
          message: "Guideline not found!!"
        })
      }
    })
  });
});


module.exports = router;
