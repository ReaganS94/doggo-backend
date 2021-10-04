const User = require("../models/User");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find(req.query).populate("tags dog");
    res.json({
      data: users,
      msg: "show all users",
    });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("tags dog");
    res.json({
      data: user,
    });
  } catch (err) {
    console.error(err);
  }
};


const createUser = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      phoneNumber,
      profilePic, 
      about,
      availability,
      city
    } = req.body;
    
    const user = await User.create({
      username,
      password,
      email,
      phoneNumber,
      profilePic, 
      about,
      availability,
      city
  
    });


    ///curl -d '{"username": "test", "password": "test", "email": "test@gmail.com"‚ "phoneNumber": "12345", "profilePic": "test", "about": "test", "availability": true, "city": "test"}' -H "Content-Type: application/json" -X POST http://localhost:5000/users

    res.json({
      msg: `added user`,
      success: true,
      data: user
    });
    } catch (err) {
    console.log(err);
    res.json({
      success: false, 
      data: err
     })
    }
   };



    const updateUser = async (req, res) => {
      try {
        const { id } = req.params;
        const { 
          username,
          password,
          email,
          phoneNumber,
          profilePic, 
          about,
          availability,
          city
         } = req.body;

    
        const user = await User.findByIdAndUpdate(id, {  
          username,
          password,
          email,
          phoneNumber,
          profilePic, 
          about,
          availability,
          city }, { new: true })
    
        res.json({
          msg: `user with id ${user.id} updated`,
          success: true,
          data: user
        })
    
      } catch(err) {
        console.log(err)
      }
    }; 
    
    
  /// curl -d '{"username": "Pika", "email": "Pika@gmail.com", "password": "12345678", "phoneNumber": 11234567, "availability": true}' -H "Content-Type: application/json" -X PUT http://localhost:5000/users/615ae72552f3a1ca8f637366


module.exports = {
  getUsers,
  getUser,
  createUser, 
  updateUser
};
