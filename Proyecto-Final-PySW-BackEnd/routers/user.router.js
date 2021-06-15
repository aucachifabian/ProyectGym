const userCtrl = require('../controllers/user.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , userCtrl.createUser);
router.get('/'      , userCtrl.getUsers);
router.post('/login' , userCtrl.loginUsuario);
router.get('/:id'   , userCtrl.getUserParams);
router.delete('/:id', userCtrl.deleteUser);
router.put('/'   , userCtrl.modifyUser);

module.exports = router;