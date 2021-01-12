const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes.js");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.get('/',(req, res)=>{
  res.send("Express Application")
});


app.use(express.json())
app.use(cors());
app.use("/app", routes);

app.listen(3500, ()=>{
    console.log("Server is listening...");
})
