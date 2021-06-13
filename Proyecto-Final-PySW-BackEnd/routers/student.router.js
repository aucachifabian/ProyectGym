const studentCtrl = require('../controllers/student.controller');
const autCtrl = require('../controllers/auth.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , autCtrl.verifyToken, studentCtrl.createStudent);
router.get('/'      , autCtrl.verifyToken, studentCtrl.getStudents);
router.get('/:id'   , studentCtrl.getStudentParams);
router.delete('/:id', studentCtrl.deleteStudent);
router.put('/:id'   , studentCtrl.modifyStudent);

module.exports = router;
