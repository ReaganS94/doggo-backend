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
  console.log("before try catch")
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
    
    console.log("between res.body and user creation")

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

    console.log("after user creation and before response")

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


module.exports = {
  getUsers,
  getUser,
  createUser
};
