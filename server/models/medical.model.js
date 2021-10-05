const mongoose = require('mongoose');


const MedicalSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Title is required!"],
        minlength: [3, "Title must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be at least 3 characters long"]
    }
})

//register the above code at a table in mongodb
const Medical = mongoose.model("Medical", MedicalSchema )

module.exports = Medical;