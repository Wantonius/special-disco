const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	username:{type:String,unique:true},
	password:String,
	isActive:Number,
	isAdmin:Number,
	activationString:String,
	firstname:String,
	lastname:String,
	points:Number
})

module.exports = mongoose.model("user",Schema);