var mongoose = require("mongoose");
var patientSchema = mongoose.Schema({
    id: String,
    patientName: String,
    description: String,
    dob: String,
    appointmentDate: Date,
    referralSource: String,
    chiefComplaint: String,
    location: String,
    orderingMd: String,
    demographicMd: String,
    assignee: String,
    condition: String,
    imgUrl: String,
    physicalInformation: Object,
    clinicalFindings: Object,
    treatmentInformation: Array,
    automatedMedicalCoding: Object,
    treatmentCompliance: Object
});
var patient = mongoose.model("patient", patientSchema, "patients");
module.exports = patient;