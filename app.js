const express = require("express");
const ejs = require("ejs");
const fs = require("fs");
const userRoutes = require("./routes/users.js");

const app = express();
const port = 3000;


app.use(userRoutes);
app.use(express.static('public'));



app.set("views", "./views");
app.set("view engine", "ejs");


app.listen(port, () => {
    console.log(`Connected on port ${port}`);
});




