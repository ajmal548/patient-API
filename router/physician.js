var express = require("express");
var router = express.Router();

var physician=require("../schema/physicianschema");

router.post("/",async(req,res)=>{
    var newPhysician = new physician({
        PhysicianName:req.body.PhysicianName,
        NPI:req.body.NPI,
        Specialty:req.body.Specialty,
        PracticeLocation:req.body.PracticeLocation
    });
    var data = await newPhysician.save()
    res.json(data);
});
router.get("/",async(req,res)=>{
    var data = await physician.find();
    res.json(data);
});

module.exports=router;