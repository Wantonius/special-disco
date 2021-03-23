const mongoose = require("mongoose");

let gameSchema = mongoose.Schema({
	home:String,
	away:String,
	result:Number,
	round:String,
	group:String
})
//winner 1:home,2:draw,3:away
let Schema = mongoose.Schema({
	username:{type:String,unique:true},
	groupgames:[gameSchema],
	knockout:[gameSchema],
	quarter:[gameSchema],
	semi:[gameSchema],
	final:gameSchema,
	topscorer:String
})

module.exports = mongoose.model("userguess",Schema);