var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new Schema({
    name: String,
    username: String,
    password: String
});
UserSchema.methods.authenticate = function(password) {
  //implementation code goes here
}
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('UserSchema', UserSchema);
