const coachCtrl = require('../controllers/coach.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.post('/', coachCtrl.crateStudent);
router.get('/', coachCtrl.getStudents);
router.get('/:id', coachCtrl.getStudentParams);
router.delete('/:id', coachCtrl.deleteStudent);
router.put('/:id', coachCtrl.modifyStudent);


module.exports = router;
