const Medical = require("../models/medical.model");



module.exports.findAllMedicals = (req,res)=>{
    Medical.find()
        .then(allMedicals=>{
            res.json({results: allMedicals})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.createNewMedical = (req,res)=>{
    console.log("creating medical with this info-->", req.body)
    Medical.create(req.body)
        .then(newMedicalObj=>{
            res.json({results: newMedicalObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneMedical = (req,res)=>{
    Medical.findOne({_id:req.params.id})
        .then(foundMedical=>{
            res.json({results: foundMedical })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateExistingMedical = (req, res) => {
    Medical.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id

        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedMedical => {
            res.json({ results: updatedMedical })
        })
        .catch(err=>{
            res.json({err:err})
        })

}

module.exports.deleteMedical = (req,res)=>{
    Medical.deleteOne({_id: req.params.id})
        .then(deletedMedical =>{
            res.json({results: deletedMedical})
        })
        .catch(err=>{
            res.json({err:err})
        })
}