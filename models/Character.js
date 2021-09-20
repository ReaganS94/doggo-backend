const mongoose = require('mongoose');

const { Schema } = mongoose;

const CharacterSchema = new Schema({
    name: {
      type: String, 
      required: [true, 'Please add a character'], 
      maxlength: [300, 'max 300 chars are allowed for the character']
    }

});


module.exports = mongoose.model('Character', CharacterSchema);