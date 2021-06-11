const trainingCtrl = require('../controllers/training.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , trainingCtrl.createTraining);
router.get('/'      , trainingCtrl.getTrainings);
router.get('/:id'   , trainingCtrl.getTrainingParams);
router.delete('/:id', trainingCtrl.deleteTraining);
router.put('/:id'   , trainingCtrl.modifyTraining);

module.exports = router;
