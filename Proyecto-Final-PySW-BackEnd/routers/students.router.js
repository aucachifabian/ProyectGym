const studentCtrl = require('../controllers/student.controller');

const express = require('express');
const router = express.Router();
const autCtrl = require('./../controllers/auth.controller');

router.post('/' ,studentCtrl.createStudent);
router.get('/', autCtrl.verifyToken ,studentCtrl.getStudents);
router.get('/:id', studentCtrl.getStudentParams);
router.delete('/:id', studentCtrl.deleteStudent);
router.put('/:id', studentCtrl.modifyStudent);

module.exports = router;
