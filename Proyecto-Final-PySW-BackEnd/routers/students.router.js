const studentCtrl = require('../controllers/student.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.post('/', studentCtrl.crateStudent);
router.get('/', studentCtrl.getStudents);
router.get('/:id', studentCtrl.getStudentParams);
router.delete('/:id', studentCtrl.deleteStudent);
router.put('/:id', studentCtrl.modifyStudent);


module.exports = router;
