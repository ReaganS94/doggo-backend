const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  
  username: {
    type: String,
    required: [true, 'Please add an username'],
    maxlength: [100, 'max 100 chars are allowed for the username'],
    unique: true
  },

  password: {
    type: String,
    required: [true, 'Please add enter a password'], 
    maxlength: [100, 'max 100 chars are allowed for the password'],
    minlength: [8, 'min 8 chars are allowed for the password'], 
    select:false
  }, 

  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ]
  },

   phoneNumber:{
       type: String,
       required: [true, 'Please add a phoneNumber'], 
       match: [ /^\(\d{3}\)\s\d{3}\s-\s\d{4}/g,
       "Telephone number is invalid"
       ]
   }, 

   profilePic: {
        type: String,
        required: [true, 'Please add a profile picture'], 
        maxlength: [2000, 'max 2000 chars are allowed for the profilePic']
    },

   about: {
       type: String,
       maxlength:[1000,'max 1000 chars are allowed for the about section']
   }, 

   availability: { 
       type: Boolean, 
       required: [true, 'Please add your preference']
   }, 

   city: {
       type: String,
       required: [true, 'Please add a location'], 
       maxlength: [200, 'max 200 chars are allowed for the location']
   }, 
    
   tags: [{ 
       type: Schema.ObjectId, 
       ref: 'Tag'
   }],

   dog: {
       type: Schema.ObjectId, 
       ref: 'Dog'
   }

});


module.exports = mongoose.model('User', UserSchema);