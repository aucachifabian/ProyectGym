const Routine = require('../models/day_routine.model');
const routineCtrl = {};

routineCtrl.createRoutine = async (req, res) => {
    var routine = new Routine(req.body);

    try {
        await routine.save();

        res.json({
           
            'status': '1',
            'msg': 'Routine saved.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Routine Error.'
        });
    };
}

routineCtrl.getRoutines = async (req, res) => {
    var routine = await Routine.find().populate("routine");

    res.json(routine);
}


routineCtrl.getRoutineParams = async (req, res) => {
    const routine = await Routine.findById(req.params.id).populate("routine");

    res.json(routine);
}

routineCtrl.deleteRoutine = async (req, res) => {
    try {
        await Routine.deleteOne({ _id: req.params.id });

        res.json({
            status: '1',
            msg: 'Routine deleted.'
        });
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Routine Error.'
        });
    };
}

routineCtrl.modifyRoutine = async (req, res) => {
    const routine = new Routine(req.body);

    try {
        await Routine.updateOne({ _id: req.body._id }, routine);

        res.json({
            'status': '1',
            'msg': 'Routine updated.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Routine Error.'
        })
    }
}

module.exports = routineCtrl;
