var mongoose = require("mongoose");
var clinicalSchema = mongoose.Schema({
    demographicData: { type: mongoose.Schema.Types.ObjectId, ref: 'demographic' },
    PastMedicalHistory: Array,
    VascularExam: String,
    ImagingFindings: String,
    Symptoms: Array,
    VitalSigns: String,
    RespiratoryExam: String
});
var clinical = mongoose.model("clinical", clinicalSchema, "clinicals");
module.exports = clinical;