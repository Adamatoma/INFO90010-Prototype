var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "prototype123"
});

var user = [
  {
    email: 'abc@gmail.com', password: 'password'
  }
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('weoair');
});

router.post('/login', function (req, res) {
  let result = user.find(user => user.email == req.body.email);
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        message: "Successful login!!"
      })
    } else {
      res.status(200).send({
        message: "Password incorrect!!"
      })
    }
  } else {
    res.status(200).send({
      message: "User not found!!"
    })
  }
})

module.exports = router;
