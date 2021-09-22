const mongoose = require('mongoose');

const { Schema } = mongoose;

const CastratedSchema = new Schema({
    validation: {
       type: Boolean, 
       required: [true, 'Please select y/n']
    }
});



module.exports = mongoose.model('CastratedFriendly', CastratedSchema);