const coachCtrl = require('../controllers/coach.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , coachCtrl.createCoach);
router.get('/'      , coachCtrl.getCoachs);
router.get('/:id'   , coachCtrl.getCoachParams);
router.delete('/:id', coachCtrl.deleteCoach);
router.put('/'   , coachCtrl.modifyCoach);

module.exports = router;
