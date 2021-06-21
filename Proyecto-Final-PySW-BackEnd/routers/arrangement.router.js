const arrangementCtrl = require('../controllers/arrangement.controller');
const autCtrl = require('../controllers/auth.controller');

const express = require('express');
const router = express.Router();

router.post('/'     , arrangementCtrl.createArrangement);
router.get('/'      , arrangementCtrl.getArrangements);
router.get('/:id'   , arrangementCtrl.getArrangementParams);
router.delete('/:id', arrangementCtrl.deleteArrangement);
router.put('/'   , arrangementCtrl.modifyArrangement);

module.exports = router;