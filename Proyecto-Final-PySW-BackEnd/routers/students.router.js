const studentCtrl = require('../controllers/student.controller');

const express = require('express');
const router = express.Router();

router.post('/', studentCtrl.createStudent);
router.get('/', studentCtrl.getStudents);
router.get('/:id', studentCtrl.getStudentParams);
router.delete('/:id', studentCtrl.deleteStudent);
router.put('/:id', studentCtrl.modifyStudent);

module.exports = router;
