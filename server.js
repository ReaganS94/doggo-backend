require('dotenv').config();
require('colors'); 
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./dbinit')
const PORT =  process.env.PORT || 5000; 

const users = require('./API/users');
const dogs = require('./API/dogs');
const catFriendly = require('./API/catFriendly'); 
const locationTypes = require('./API/locationTypes');


// const allergies = require('./API/allergies'); 
// const castrated = require('./API/castrated')
// const kidFriendly = require('./API/kidFriendly'); 
// const characters = require('./API/character'); 
// const commands = require('./API/commands'); 
// const locations = require('./API/locations'); 
// const tags = require('./API/tags')


connectDB();

app.use(express.json());
app.use(cors());
app.use("/users", users);
app.use("/dogs", dogs);
app.use('/catFriendly', catFriendly);
app.use('locationTypes', locationTypes);

//app.use('./allergies', allergies);
//app.use('./castrated'), castrated; 
//app.use('./characters', characters);
//app.use('./commands', commands);
//app.use('./kidFriendly', kidFriendly); 
//app.use('./locations', locations); 
//app.use('./tags', tags); 

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));