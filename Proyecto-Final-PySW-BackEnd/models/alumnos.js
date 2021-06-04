const mongoose = require('mongoose');
const { Schema } = mongoose;
const Plan = require('../models/plan')

const AlumnoSchema = new Schema({

    Apellido: { type: String, required: true },
    Nombre: { type: String, required: true },
    DNI: { type: String, required: true },
    Fecha_de_Nacimiento: { type: Boolean, required: true },
    Celular: { type: String, required: true },
    Domicilio: { type: String, required: true },
    Correo_electrónico: { type: String, required: true },
    Fecha_de_inicio: { type: String, required: true },
    Plan: { type: String, required: true },
    pasajero: { type: Schema.Types.ObjectId, ref: Plan, require: true }

})

module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);
