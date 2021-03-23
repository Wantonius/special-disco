const mongoose = require("mongoose");

let childSchema = mongoose.Schema({
	team:String,
	points:Number
})

let Schema = mongoose.Schema({
	groupname:String,
	teams:[childSchema],
	qualified:[String]
})

module.exports = mongoose.model("group",Schema);