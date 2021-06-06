const ArrangementCtrl = require('../controllers/arrangement.controller');
const express = require('express');
const router = express.Router();


router.post('/', ArrangementCtrl.crateStudent);
router.get('/', ArrangementCtrl.getStudents);
router.get('/:id', ArrangementCtrl.getStudentParams);
router.delete('/:id', ArrangementCtrl.deleteStudent);
router.put('/:id', ArrangementCtrl.modifyStudent);


module.exports = router;