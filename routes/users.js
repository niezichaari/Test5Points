var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/*var UserTest = mongoose.model('UserSchema');
var MessageModel = mongoose.model('MessageModel');
*/


/* GET users listing. */
router.post('/', function(req, res, next) {
/*  var UserReq = new UserTest({
    UserName: req.body.UserName,
    Password: req.body.Password
  });
  UserTest.find(function(err, User){

    if(User.find(x => x.UserName === UserReq.UserName && x.Password===UserReq.Password)){

      res.status(200).json({
           message: 'Login ok'
       });
     }
    else {
      res.status(404).json({
           message: 'Check username or password'
       });        }

  })*/
})
/*
router.post('/SendMessage', function(req, res, next) {
  var Message = new MessageModel({
    Sender : req.body.Sender,
    Reciever:req.body.Reciever,
    object: req.body.object,
    Message: req.body.Message
  });
  /*MessageModel.find(function(err, Message){
    res.send('exist');
  })
  Message.save(function(err, Message){
    res.send('MessageSended');
  })
})*/
  /*
  chris.save(function(err) {
    if (err) throw err;
});*/

module.exports = router;
