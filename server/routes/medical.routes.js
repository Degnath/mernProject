const MedicalController = require('../controllers/medical.controller');


module.exports = function(app){
    app.get('/api/medicals', MedicalController.findAllMedicals);
    app.post('/api/medicals', MedicalController.createNewMedical);
    app.get('/api/medicals/:id', MedicalController.findOneMedical);
    app.put('/api/medicals/:id', MedicalController.updateExistingMedical);
    app.delete('/api/medicals/:id', MedicalController.deleteMedical)
}