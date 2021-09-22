require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./API/users");
const connectDB = require("./dbinit");
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());
app.use("/users", users);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
