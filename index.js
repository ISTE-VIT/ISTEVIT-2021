var express = require('express');
var app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const webinarRouter = require('./routes/webinar')


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(express.json({ extended: false }));

app.set('view engine', 'ejs');



app.use('/',webinarRouter)
  
const port = process.env.PORT || 3000;

const db = process.env.MONGO_URI;
//ConnectDb

const connect = mongoose
    .connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("Mondo db connected...."))
    .catch((err) => console.log(err));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});