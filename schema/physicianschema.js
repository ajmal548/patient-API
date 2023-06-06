var mongoose = require("mongoose");
var physicianSchema = mongoose.Schema({
    PhysicianName: String,
    NPI: String,
    Specialty: String,
    PracticeLocation: String
});
var physician = mongoose.model("physician", physicianSchema, "physicians");
module.exports = physician