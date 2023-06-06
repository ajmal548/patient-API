var express = require("express");
var router = express.Router();

var demographicdata = require("../schema/demographic");

router.post("/", async (req, res) => {
    var demographicData = new demographicdata({
        age:req.body.age,
        gender:req.body.gender ,
        race:req.body.race,
        ethnicity:req.body.ethnicity
    });
    var data = await demographicData.save();
    res.json(data);
});
module.exports=router