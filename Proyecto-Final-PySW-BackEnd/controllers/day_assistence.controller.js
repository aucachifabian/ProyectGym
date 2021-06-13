const Assistence = require('../models/day_assistence.model');
const assistenceCtrl = {};
const studentCtrl = require('./student.controller');
const Student = require('../models/student.model');


/*the method creates an attendance if it is the first student.
otherwise update the assistance.

also update amount_day in student*/
assistenceCtrl.createAssistence = async (req, res) => {
    let a;
    var assistence = new Assistence(req.body);
    let firstStudent = await Assistence.findOne({day : req.body.day});
   // check valid     1 - to correct   0 - to arrangement defeated 
    a = await studentCtrl.checkValidate(req,res);
  //  console.log("valor de a :" + a )
    if(a==0)
    {
        res.json({
            'status': '1',
             'msg': 'Asistencia no permitida, debe Abonar para un nuevo mes.',
           });
   }
   else{
    if(firstStudent == null || firstStudent == undefined)
     { try {
        await assistence.save();
           res.json({
           'status': '1',
            'msg': 'Se creo una nueva asistencia.',
          });
       } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence Error check the data'
        });
       };
     }
     else
     {
        firstStudent.student.push(req.body.student[0]);
        req.body = firstStudent;
        assistenceCtrl.modifyAssistence(req, res);
    };
   }
   }

assistenceCtrl.getAssistences = async (req, res) => {
    var assistence = await Assistence.find().exec();
    
    res.json(assistence);
}


assistenceCtrl.getAssistenceParams = async (req, res) => {
    const assistence = await Assistence.findById(req.params.id);

    res.json(assistence);
}

assistenceCtrl.deleteAssistence = async (req, res) => {
    try {
        await Assistence.deleteOne({ _id: req.params.id });

        res.json({
            status: '1',
            msg: 'Assistence save'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence Error.'
        });
    };
}

assistenceCtrl.modifyAssistence = async (req, res) => {
    const assistence = new Assistence(req.body);
    try {
        await Assistence.updateOne({ _id: req.body._id }, assistence);
        res.json({
            'status': '1',
            'msg': 'Assistence update',
            "regis" : req.body
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence Error' + error
        });
    };
}

module.exports = assistenceCtrl;
