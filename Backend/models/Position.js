var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Seconds = 120 ;

var PositionSchema = new Schema({
 //Make sure that next line reflects your User-model
 user: {type: Schema.ObjectId, ref: 'User', required: true},
 created: { type: Date, expires: Seconds, default: Date.now },
 loc: {
 'type': { type: String, enum: "Point", default: "Point" },
 coordinates: { type: [Number] }
 }
})
PositionSchema.index({ loc: "2dsphere" },{ "background": true });

module.exports = mongoose.model("Position",PositionSchema); 