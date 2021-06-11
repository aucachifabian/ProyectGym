const Student       = require('../models/student.model');
const studentCtrl   = {};


studentCtrl.createStudent = async (req, res) => {
//    if(req.rol =="coach")
  /* {*/ var alum = new Student(req.body);
    console.log(alum)
    try {
        await alum.save();

        res.json({
      
            'status': '1',
            'msg': 'Student saved.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Student Error' + error
        });
    };
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
    const student = await Student.findById(req.params.id);

    res.json(student);
}

studentCtrl.deleteStudent = async (req, res) => {
    try {
        await Student.deleteOne({ _id: req.params.id });

        res.json({
            status: '1',
            msg: 'Student deleted'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Student Error.'
        });
    };
}

studentCtrl.modifyStudent = async (req, res) => {
    const alum = new Student(req.body);

    try {
        await Student.updateOne({ _id: req.body._id }, alum);

        res.json({
            'status': '1',
            'msg': 'Student updated.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Student Error.'
        });
    };
}


module.exports = studentCtrl;
