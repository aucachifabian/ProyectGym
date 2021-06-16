const Payment = require('../models/payment.model');
const Student = require('../models/student.model');
const tool = require('../tools/date_methods')
const paymentCtrl = {};

paymentCtrl.createPayment = async (req, res) => {
    var payment = new Payment(req.body);
    var student = new Student();

    student = await Student.findById(payment.student);
    student.end_date.setDate(payment.pay_day.getDate() + 30) 

    try {
        await Student.updateOne({ _id: student._id }, student);
        await payment.save();

        res.json({
            'status': '1',
            'msg': 'Payment saved and Student updated.'

        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Payment Error.'
        });
    };
}

paymentCtrl.getPayments = async (req, res) => {
    var payment = await Payment.find().exec();

    res.json(payment);
}


paymentCtrl.getPaymentParams = async (req, res) => {
    const payment = await Payment.findById(req.params.id);

    res.json(payment);
}

paymentCtrl.deletePayment = async (req, res) => {
    try {
        await Payment.deleteOne({ _id: req.params.id });

        res.json({
            status: '1',
            msg: 'Payment deleted.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Payment Error.'
        });
    };
}

paymentCtrl.modifyPayment = async (req, res) => {
    const payment = new Payment(req.body);

    try {
        await Payment.updateOne({ _id: req.body._id }, payment);

        res.json({
            'status': '1',
            'msg': 'Payment updated'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Payment Error.'
        });
    };
}

module.exports = paymentCtrl;
