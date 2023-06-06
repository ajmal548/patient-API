var express = require("express");
var router = express.Router();
var Patient = require("../schema/patientSchema");


router.post("/", async (req, res) =>{
    var info = req.body;
    if (!info.id || !info.patientName || !info.description || !info.dob ||
        !info.appointmentDate || !info.location || !info.orderingMd ||
        !info.demographicMd || !info.assignee || !info.condition) {
        res.send("Please fill all data");
    } else {
        var newPatient = new Patient({
            id: info.id,
            patientName: info.patientName,
            description: info.description,
            dob: info.dob,
            appointmentDate: info.appointmentDate,
            referralSource: info.referralSource,
            chiefComplaint: info.chiefComplaint,
            location: info.location,
            orderingMd: info.orderingMd,
            demographicMd: info.demographicMd,
            assignee: info.assignee,
            condition: info.condition,
            imgUrl: info.imgUrl,
            physicalInformation: info.physicalInformation,
            clinicalFindings: info.clinicalFindings,
            treatmentInformation: info.treatmentInformation,
            automatedMedicalCoding: info.automatedMedicalCoding,
            treatmentCompliance: info.treatmentCompliance
        });

        const data = await newPatient.save();
        res.json(data);
    }
});

router.get("/", async (req, res)=>{
    const data = await Patient.find();
    res.json(data);
});

router.get("/:id", async (req, res)=> {
    const data = await Patient.findOne({ id: req.params.id });
    res.json(data);
});

router.delete("/:id", async (req, res)=> {
    const data = await Patient.findOneAndRemove({ id: req.params.id });
    res.json(data);
});
router.put("/:id", async (req, res)=> {
    const patient = await Patient.findByIdAndUpdate({ id:req.params.id },
        {
            patientName:req.body.patientName,
            description: req.body.description,
            dob: req.body.dob,
            appointmentDate: req.body.appointmentDate,
            referralSource: req.body.referralSource,
            chiefComplaint: req.body.chiefComplaint,
            location: req.body.location,
            orderingMd: req.body.orderingMd,
            demographicMd: req.body.demographicMd,
            assignee: req.body.assignee,
            condition: req.body.condition,
            imgUrl: req.body.imgUrl,
            physicalInformation:  req.body.physicalInformation,
            clinicalFindings:  req.body.clinicalFindings,
            treatmentInformation:  req.body.treatmentInformation,
            automatedMedicalCoding:  req.body.automatedMedicalCoding,
            treatmentCompliance:  req.body.treatmentCompliance
        },{ new:true })
    res.json(patient)
});
module.exports = router;