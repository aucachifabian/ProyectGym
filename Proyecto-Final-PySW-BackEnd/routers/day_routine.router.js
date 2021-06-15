const routineCtrl = require('../controllers/day_routine_controller');

const express = require('express');
const router = express.Router();

router.post('/'     , routineCtrl.createRoutine);
router.get('/'      , routineCtrl.getRoutines);
router.get('/:id'   , routineCtrl.getRoutineParams);
router.delete('/:id', routineCtrl.deleteRoutine);
router.put('/'   , routineCtrl.modifyRoutine);

module.exports = router;
