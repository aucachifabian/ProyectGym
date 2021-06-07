const Tea        = require('../models/student_assistence.model');
const teaCtrl    = {};

teaCtrl.createTea = async (req, res) => {
    var tea = new Tea(req.body);

    try {
        await tea.save();
        res.json({
            'status': '1',
            'msg': 'Tea save.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Tea error.'
        });
    }
}

teaCtrl.getTeas = async (req, res) => {
    var tea = await Tea.find().exec();

    res.json(tea);
}


teaCtrl.getTeaParams = async (req, res) => {
    const tea = await Tea.findById(req.params.id);

    res.json(tea);
}

teaCtrl.deleteTea = async (req, res) => {
    
    try {
        await Tea.deleteOne({_id: req.params.id});

        res.json({
            status: '1',
            msg: 'Tea deleted'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Tea error.'
        });
    }
}

teaCtrl.modifyTea = async (req, res) => {
    const tea = new Tea(req.body);

    try {
        await Tea.updateOne({ _id: req.body._id }, tea);
        res.json({
            'status': '1',
            'msg': 'Tea update'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Tea error.'
        });
    }
}

module.exports = teaCtrl;
