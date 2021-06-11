const Student = require('../models/student.model')
const studentCtrl = {}


studentCtrl.createStudent = async (req, res) => {
//    if(req.rol =="coach")
  /* {*/ var alum = new Student(req.body);
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
  //}
  /*else
  {
    res.json({
        'status': '0',
        'msg': 'n' + error
    })
    }*/

}

studentCtrl.getStudents = async (req, res) => {
    var alum = await Student.find().exec();
    res.json(alum);
}


studentCtrl.getStudentParams = async (req, res) => {
    const pas = await Student.findById(req.params.id)
    res.json(pas);
}

studentCtrl.deleteStudent = async (req, res) => {
    try {
        await Student.deleteOne({ _id: req.params.id });
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

studentCtrl.modifyStudent = async (req, res) => {
    const alum = new Student(req.body);
    try {
        await Student.updateOne({ _id: req.body._id }, alum);
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


module.exports = studentCtrl;
