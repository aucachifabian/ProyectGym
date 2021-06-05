const Alumno = require('../models/alumnos')
const AlumnoCtrl = {}


AlumnoCtrl.crateAlumno = async (req, res) => {
    var alum = new Alumno(req.body);
    console.log(noticia)
    try {
        await alum.save();
        res.json({
            alum: alum,
            'status': '1',
            'msg': 'alumno guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion al guardar el alumno.'
        })
    }
}

AlumnoCtrl.getAlumnos = async (req, res) => {
    var alum = await Alumno.find().exec();
    res.json(alum);
}


AlumnoCtrl.getAlumnosparams = async (req, res) => {
    const pas = await Alumno.findById(req.params.id)
    res.json(pas);
}

AlumnoCtrl.deleteAlumno = async (req, res) => {
    try {
        await Alumno.findByIdAndRemove({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'alumno borrado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

AlumnoCtrl.modificarAlumno = async (req, res) => {
    const alum = new Alumno(req.body);
    try {
        await Alumno.updateOne({ _id: req.body._id }, alum);
        res.json({
            'status': '1',
            'msg': 'alumno actualizada'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion de modificacion'
        })
    }
}

module.exports = AlumnoCtrl;
