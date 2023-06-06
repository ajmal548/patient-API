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
    physicalInformation: { type: mongoose.Schema.Types.ObjectId, ref: 'physician' },
    clinicalFindings: { type: mongoose.Schema.Types.ObjectId, ref: 'clinical' },
    treatmentInformation: Array,
    automatedMedicalCoding: { type: mongoose.Schema.Types.ObjectId, ref: 'AMD' },
    treatmentCompliance: Object
});
var patient = mongoose.model("patient", patientSchema, "patients");
module.exports = patient;