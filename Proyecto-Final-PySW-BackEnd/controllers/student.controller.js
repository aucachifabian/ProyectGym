const student = require('../models/student')
const StudentCtrl = {}


StudentCtrl.crateStudent = async (req, res) => {
    var alum = new student(req.body);
    console.log(alum)
    try {
        await alum.save();
        res.json({
      
            'status': '1',
            'msg': 'alumno guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion al guardar el alumno.' + error
        })
    }
}

StudentCtrl.getStudents = async (req, res) => {
    var alum = await student.find().exec();
    res.json(alum);
}


StudentCtrl.getStudentParams = async (req, res) => {
    const pas = await student.findById(req.params.id)
    res.json(pas);
}

StudentCtrl.deleteStudent = async (req, res) => {
    try {
        await student.findByIdAndRemove({ _id: req.params.id });
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

StudentCtrl.modifyStudent = async (req, res) => {
    const alum = new Student(req.body);
    try {
        await student.updateOne({ _id: req.body._id }, alum);
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


module.exports = StudentCtrl;
