var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/5Points');
var schema =mongoose.Schema;
var Usertest = new schema({
  UserName : String,
  Password:String
});
var MessageModel = new schema({
  Sender : String,
  Reciever:String,
  object: String,
  Message: String
});
mongoose.model('Usertest', Usertest);
mongoose.model('MessageModel', MessageModel);
