const paymentCtrl = require('../controllers/payment.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.post('/', paymentCtrl.crateStudent);
router.get('/', paymentCtrl.getStudents);
router.get('/:id', paymentCtrl.getStudentParams);
router.delete('/:id', paymentCtrl.deleteStudent);
router.put('/:id', paymentCtrl.modifyStudent);


module.exports = router;