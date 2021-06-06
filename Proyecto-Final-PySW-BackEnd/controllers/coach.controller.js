const coach = require('../models/coach')
const CoachCtrl = {}

CoachCtrl.crateStudent = async (req, res) => {
    var alum = new coach(req.body);
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

CoachCtrl.getStudents = async (req, res) => {
    var alum = await coach.find().exec();
    res.json(alum);
}


CoachCtrl.getStudentParams = async (req, res) => {
    const pas = await coach.findById(req.params.id)
    res.json(pas);
}

CoachCtrl.deleteStudent = async (req, res) => {
    try {
        await coach.findByIdAndRemove({ _id: req.params.id });
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

CoachCtrl.modifyStudent = async (req, res) => {
    const alum = new coach(req.body);
    try {
        await coach.updateOne({ _id: req.body._id }, alum);
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

module.exports = CoachCtrl;
