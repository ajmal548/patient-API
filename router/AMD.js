var express = require("express");
var router = express.Router();

var amd = require("../schema/AMCschema");

router.post("/", async (req, res) => {
    var newAMD = new amd({
        Insurance_ID_Number: req.body.Insurance_ID_Number,
        Patient_Insurance_Plan_ID_Number: req.body.Patient_Insurance_Plan_ID_Number,
        Medical_Decision_Making: req.body.Medical_Decision_Making,
        Procedures_Performed: req.body.Procedures_Performed,
        Examination_Findings: req.body.Examination_Findings,
        Health_Maintenance_Items_Reviewed: req.body.Health_Maintenance_Items_Reviewed,
        Problem_List: req.body.Problem_List,
        Assessments_Completed: req.body.Assessments_Completed,
        Medications: req.body.Medications,
        ICD_10_Codes: req.body.ICD_10_Codes,
        CPTCodes: req.body.CPTCodes,
        Modifiers: req.body.Modifiers,
        Date_Of_Service: req.body.Date_Of_Service,
        Providers_Name: req.body.Providers_Name,
        Providers_NPI: req.body.Providers_NPI,
        Office_Advice_Medicine_Time_Spent: req.body.ffice_Advice_Medicine_Time_Spent,
        Initial_Hospital_Days: req.body.Initial_Hospital_Days,
        Final_Billable_ServiceUnits: req.body.Final_Billable_ServiceUnits,
        Total_Charges_Billed: req.body.Total_Charges_Billed,
        Discounts_Applied: req.body.Discounts_Applied,
        Amount_Paid_By_Insurance: req.body.Amount_Paid_By_Insurance,
        Amount_Due_From_Patient: req.body.Amount_Due_From_Patient,
        Amount_Physician_Will_Get: req.body.Amount_Physician_Will_Get
    });
    var data=await newAMD.save();
    res.json(data);
});
router.get("/",async(req,res)=>{
    var data= await newAMD.find();
    res.json(data);
});
module.exports=router;
