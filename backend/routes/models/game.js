const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	home:String,
	away:String,
	homegoals:Number,
	awaygoals:Number,
	winner:Number,
	round:String,
	group:String,
	scorers:[String],
	pointsForHome:Number,
	pointsForDraw:Number,
	pointsForAway:Number
})

module.exports = mongoose.model("game",Schema);

//not played:0,winner 1:home,2:draw,3:away
//round: "group","knockout","quarter","semi","final"