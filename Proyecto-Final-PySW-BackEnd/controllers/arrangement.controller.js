const arrangement = require('../models/arrangement')
const ArrangementCtrl = {}

ArrangementCtrl.crateStudent = async (req, res) => {
    var alum = new arrangement(req.body);
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

ArrangementCtrl.getStudents = async (req, res) => {
    var alum = await arrangement.find().exec();
    res.json(alum);
}


ArrangementCtrl.getStudentParams = async (req, res) => {
    const pas = await arrangement.findById(req.params.id)
    res.json(pas);
}

ArrangementCtrl.deleteStudent = async (req, res) => {
    try {
        await arrangement.findByIdAndRemove({ _id: req.params.id });
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

ArrangementCtrl.modifyStudent = async (req, res) => {
    const alum = new arrangement(req.body);
    try {
        await arrangement.updateOne({ _id: req.body._id }, alum);
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

module.exports = ArrangementCtrl;
