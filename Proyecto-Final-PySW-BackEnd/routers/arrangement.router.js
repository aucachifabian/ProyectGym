const arrangementCtrl = require('../controllers/arrangement.controller');
const autCtrl = require('../controllers/auth.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , arrangementCtrl.createArrangement);
router.get('/'      , autCtrl.verifyToken, arrangementCtrl.getArrangements);
router.get('/:id'   , autCtrl.verifyToken, arrangementCtrl.getArrangementParams);
router.delete('/:id', arrangementCtrl.deleteArrangement);
router.put('/:id'   , arrangementCtrl.modifyArrangement);

module.exports = router;