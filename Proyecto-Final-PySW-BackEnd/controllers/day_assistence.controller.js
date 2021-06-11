const Assistence = require('../models/day_assistence.model');
const assistenceCtrl = {};

assistenceCtrl.createAssistence = async (req, res) => {
    var assistence = new Assistence(req.body);

    try {
        await assistence.save();

        res.json({
           
            'status': '1',
            'msg': 'Assistence save.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence Error.'
        });
    };
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
            'msg': 'Assistence update'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence Error'
        });
    };
}

module.exports = assistenceCtrl;
