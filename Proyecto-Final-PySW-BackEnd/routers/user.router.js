const userCtrl = require('../controllers/user.controller');
//const authCrtl = requi
const express = require('express');
const router = express.Router();

router.post('/', userCtrl.createUser);
router.get('/', userCtrl.getUsers);
router.get('/login', userCtrl.loginUsuario);
router.get('/:id', userCtrl.getUserParams);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id', userCtrl.modifyUser);

module.exports = router;