var express = require("express");
var router = express.Router();

var clinical = require("../schema/clinicalschema");

router.post("/", async (req, res) => {
    var newClinical = new clinical({
        demographicData: req.body.demographicData,
        PastMedicalHistory: req.body.PastMedicalHistory,
        VascularExam: req.body.VascularExam,
        ImagingFindings: req.body.ImagingFindings,
        Symptoms: req.body.Symptoms,
        VitalSigns: req.body.VitalSigns,
        RespiratoryExam: req.body.RespiratoryExam,
    })
    var data = await newClinical.save();
    res.json(data);
});
router.get("/:_id",async(req,res)=>{
    var data = await clinical.findOne({_id:req.params._id})
    .populate("demographicData");
    res.json(data);
})
module.exports = router;