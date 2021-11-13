var mongoose = require("mongoose");
//For projects details
var MessageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
   
}, { timestamps: true });

module.exports = mongoose.model("Message", MessageSchema);