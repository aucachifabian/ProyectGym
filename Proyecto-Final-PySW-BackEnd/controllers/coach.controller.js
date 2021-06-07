const Coach = require('../models/coach.model')
const coachCtrl = {}

coachCtrl.createCoach = async (req, res) => {
    var alum = new Coach(req.body);
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

coachCtrl.getCoachs = async (req, res) => {
    var alum = await Coach.find().exec();
    res.json(alum);
}


coachCtrl.getCoachParams = async (req, res) => {
    const pas = await Coach.findById(req.params.id)
    res.json(pas);
}

coachCtrl.deleteCoach = async (req, res) => {
    try {
        await Coach.deleteOne({ _id: req.params.id });
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

coachCtrl.modifyCoach = async (req, res) => {
    const alum = new Coach(req.body);
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

module.exports = coachCtrl;
