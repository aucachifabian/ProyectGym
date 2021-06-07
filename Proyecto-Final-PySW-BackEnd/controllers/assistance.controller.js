const Assistence        = require('../models/assistance.model');
const assistenceCtrl    = {};

assistenceCtrl.createAssistence = async (req, res) => {
    var assitence = new Assistence(req.body);

    try {
        await assitence.save();
        res.json({
            'status': '1',
            'msg': 'Assistence save.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence error.'
        })
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
        await Assistence.deleteOne({_id: req.params.id});

        res.json({
            status: '1',
            msg: 'Assistence deleted'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence error.'
        });
    }
}

assistenceCtrl.modifyAssistence = async (req, res) => {
    const assistence = new Assitence(req.body);

    try {
        await Assitence.updateOne({ _id: req.body._id }, assistence);
        res.json({
            'status': '1',
            'msg': 'Assistence update'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Assistence error.'
        });
    }
}

module.exports = assistenceCtrl;
