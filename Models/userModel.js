const mongoose = require('mongoose');

const user = new mongoose.Schema({
    "firstName": {type:String},
    "lastName":{type:String},
    "age":{type:Number},
    "phoneNo":{type:Number},
    "gender": {type:String},
    "id": {type:String},
    "email":{type:String},
    "password":{type:String},
    "facebook_id" :{type:String},
    "profile_pic": {type:String},
    "fullName":{type:String},
});

module.exports = mongoose.model('user', user);