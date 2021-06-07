const teaCtrl = require('../controllers/student_assistence.controller');

const express = require('express');
const router = express.Router();

router.post('/', teaCtrl.createTea);
router.get('/', teaCtrl.getTeas);
router.get('/:id', teaCtrl.getTeaParams);
router.delete('/:id', teaCtrl.deleteTea);
router.put('/:id', teaCtrl.modifyTea);

module.exports = router;