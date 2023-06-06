var mongoose=require("mongoose");
var amdSchema=mongoose.Schema({
    Insurance_ID_Number:Number,
    Patient_Insurance_Plan_ID_Number:Number,
    Medical_Decision_Making:String,
    Procedures_Performed:String,
    Examination_Findings:String,
    Health_Maintenance_Items_Reviewed:String,
    Problem_List:String,
    Assessments_Completed:String,
    Medications:String,
    ICD_10_Codes:String,
    CPTCodes:String,
    Modifiers:String,
    Date_Of_Service:Date,
    Providers_Name:String,
    Providers_NPI:Number,
    Office_Advice_Medicine_Time_Spent:String,
    Initial_Hospital_Days:String,
    Final_Billable_ServiceUnits:String,
    Total_Charges_Billed:String, 
    Discounts_Applied: String,
    Amount_Paid_By_Insurance:String,
    Amount_Due_From_Patient:String,
    Amount_Physician_Will_Get:String
});
var AMD=mongoose.model("AMD",amdSchema,"AMDs");
module.exports=AMD;
