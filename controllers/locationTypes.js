const LocationType = require('../models/LocationType')

const getLocationTypes = async (req, res) => {
    try {
      const locationTypes = await LocationType.find();
      res.json({
        success: true,
        data: user,
        msg: "show all the location types",
      });
    } catch (err) {
      console.log(err);
    }
  };

const getLocationType = async (req, res, next) => { 
    try{
    const locationType = await LocationType.findById(id);
    res.json({
        data: locationType,
    })
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getLocationTypes,
    getLocationType
}




