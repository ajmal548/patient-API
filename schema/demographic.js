var mongoose =require("mongoose");
var demographicSchema = mongoose.Schema({
    age:Number,
    gender:String,
    race:String,
    ethnicity:String
});
var demographic = mongoose.model("demographic",demographicSchema,"demographicData");
module.exports=demographic;