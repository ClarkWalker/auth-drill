var express = require('express');
var router = express.Router();
var db = require('../db/api');
var bcrypt = require('bcrypt');

router.post('/signin', function(req, res, next) {
  let isMatch = req.body.agentName;
  console.log('isMatch', isMatch);
  db.signIn(req.body.agentName)
  .then(function(agent) {
    console.log('agent', agent[0].agentName);
    if (isMatch === agent[0].agentName) {
      //Route to /Assignment
      console.log('oh shit!');
      res.render('index');
    } else {
      res.render('index', {
        title: 'gClassified',
        message: 'Incorrect login. Contents will self destruct'
      });
    }
  });
});

router.post('/signup', function(req, res, next) {
  //Use bcrypt to Sign Up

  db.signUp()
  .then(function(agent) {
    if (agent[0].password === req.body.password) {
      res.render('index', {
        title: 'gClassified',
        message: 'Password Must Be Hashed. Government Secrets are at Stake!'
      });
    } else {
      res.render('index', {
        title: 'gClassified',
        message: 'Sign Up Successful'
      });
    }
  });
});

module.exports = router;
