const { Schema } = mongoose;

const CatFriendlySchema = new Schema({
    validation: {
       type: Boolean, 
       required: [true, 'Please select y/n']
    }
});



module.exports = mongoose.model('CatFriendly', CatFriendlySchema);