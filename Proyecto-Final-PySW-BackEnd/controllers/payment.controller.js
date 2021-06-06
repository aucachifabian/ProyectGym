const Payment = require('../models/payment');
const Student = require('../models/student');
const PaymentCtrl = {}
student:Student;
PaymentCtrl.crateStudent = async (req, res) => {
    var payment = new Payment(req.body);
    console.log(payment);
    var student = new Student();
    student = await Student.findById(payment.Student);
    student.End_date = payment.Pay_day;
    student.Phone = "585858588585858585";
    console.log(student);
    await student.save();

    try {
        await payment.save();
        res.json({
          'status': '1',
            'msg': 'Pago guardado y alumno modificado xd.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion al guardar el alumno.'
        })
    }
}

PaymentCtrl.getStudents = async (req, res) => {
    var alum = await Payment.find().exec();
    res.json(alum);
}


PaymentCtrl.getStudentParams = async (req, res) => {
    const pas = await Payment.findById(req.params.id)
    res.json(pas);
}

PaymentCtrl.deleteStudent = async (req, res) => {
    try {
        await Payment.findByIdAndRemove({ _id: req.params.id });
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

PaymentCtrl.modifyStudent = async (req, res) => {
    const alum = new Payment(req.body);
    try {
        await Payment.updateOne({ _id: req.body._id }, alum);
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

module.exports = PaymentCtrl;
