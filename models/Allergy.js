const { Schema } = mongoose;

const AllergySchema = new Schema({
    validation: {
       type: Boolean, 
       required: [true, 'Please select y/n']
    }
});



module.exports = mongoose.model('Allergy', AllergySchema);