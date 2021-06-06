const userCtrl = require('../controllers/user.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();


router.post('/', userCtrl.crateUser);
router.get('/', userCtrl.getUsers);
router.get('/:id', userCtrl.getUserParams);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id', userCtrl.modifyUser);


module.exports = router;