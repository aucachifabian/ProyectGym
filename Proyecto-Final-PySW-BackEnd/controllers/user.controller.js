const user = require('../models/user');
const UserCtrl = {}


UserCtrl.crateUser = async (req, res) => {
    var alum = new user(req.body);
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

UserCtrl.getUsers = async (req, res) => {
    var alum = await user.find().populate("owner.coach").populate("owner.student");
    res.json(alum);
}


UserCtrl.getUserParams = async (req, res) => {
    const pas = await user.findById(req.params.id)
    res.json(pas);
}

UserCtrl.deleteUser = async (req, res) => {
    try {
        await user.findByIdAndRemove({ _id: req.params.id });
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

UserCtrl.modifyUser = async (req, res) => {
    const alum = new user(req.body);
    try {
        await user.updateOne({ _id: req.body._id }, alum);
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

module.exports = UserCtrl;