const alumnosCtrl = require('../controllers/alumnos.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.post('/', alumnosCtrl.crateAlumno);
router.get('/', alumnosCtrl.getAlumnos);
router.get('/:id', alumnosCtrl.getAlumnosparams);
router.delete('/:id', alumnosCtrl.deleteAlumno);
router.put('/:id', alumnosCtrl.modificarAlumno);


module.exports = router;
