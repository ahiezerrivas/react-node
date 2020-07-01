const mongoose = require("mongoose");
const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
    },
    email: {
    type: String,
    trim: true,
    required: true
    },
    hashed_password: {
    type: String,
    required: true
    },
    salt: String,
    created: {
      type: Date,
      default: Date.now
     },
     updated: Date
 })

//virtual field
userSchema.virtual('password')
.set(function(password) {
    //create temporary variable called _password
    this._password = password
    // generate a timestamp
    
 
 module.exports = mongoose.model("User", userSchema);
     
